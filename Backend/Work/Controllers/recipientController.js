const recipient_model = require("../Models-Schema/recipient_schema")
const user_model = require("../Models-Schema/user_schema")
const blood_request_model = require("../Models-Schema/blood_Request_Schema")
const notification_model = require("../Models-Schema/notification_Schema")

const { hashPassword, comparePassword } = require("../Middleware/hash_password");



const fs = require("fs");
const JWT = require("jsonwebtoken");






async function testController(req, res) {
    res.send({
        message: "We are in << Recipient >> test function !!"
    })
}



// // ********************************************************************************
// //jb hm image ko receive kr rahy ho to phir data "req.fields" mey receive hota 
// // hai or image ko hm "req.files" sy get kry gy
const recipient_signUp = async (req, res) => {
    try {
        const { name, username, email, password, phone, gender, age, address, person } = req.fields;
        const { profile_photo } = req.files;
        //validation
        switch (true) {
            case !name:
                return res.status(500).send({ error: "Name is Required" });
            case !username:
                return res.status(500).send({ error: "User Name is Required" });
            case !email:
                return res.status(500).send({ error: "Email is Required" });
            case !password:
                return res.status(500).send({ error: "Password is Required" });
            case !phone:
                return res.status(500).send({ error: "phone is Required" });
            case !gender:
                return res.status(500).send({ error: "Gender is Required" });
            case !age:
                return res.status(500).send({ error: "Age is Required" });
            case !address:
                return res.status(500).send({ error: "address is Required" });
            case !person:
                return res.status(500).send({ error: "person is Required in sign-up" });
            case profile_photo && profile_photo.size > 1000000:
                return res.status(500).send({ error: "profile_photo is Required and should be less then 1MB" });
        }

        // check existing recipient
        const existingrecipient = await user_model.findOne({ email })

        if (existingrecipient) {
            res.status(200).send({
                success: false,
                message: "You are already exist, please login",
            })
        }

        const existingUsername = await user_model.findOne({ username })
        if (existingUsername) {
            res.status(200).send({
                success: false,
                message: "User_name already exist, please edit your username!",
            })
        }

        // hashing Password
        const hashedPassword = await hashPassword(password);

        // Function to convert a string in "MM/DD/YYYY" format to a Date object
        // function string_Into_Date(dateString) {
        //     const [month, day, year] = dateString.split('/');
        //     return new Date(year, month - 1, day); // Month is 0-indexed in JavaScript Date
        // }

        // Convert and assign
        // const real_date = string_Into_Date(last_time_donation_date);

        // // function string into "Date Object"
        // function string_Into_Date(dateString) {
        //     const [month, day, year] = dateString.split('/');
        //     return new Date(`${year}-${month}-${day}`);
        // }

        data_for_user_collection = {
            name,
            username,
            email,
            password: hashedPassword,
            phone,
            person
        }


        const USER = new user_model(data_for_user_collection);


        // const USER = new userModel({ ...req.fields, slug: slugify(firstname) });

        if (profile_photo) {
            USER.profile_photo.data = fs.readFileSync(profile_photo.path);
            USER.profile_photo.contentType = profile_photo.type;
        }
        await USER.save();
        // const USER = await productModel.create({ ...req.fields, slug: slugify(name) });
        // if (profile_photo) {
        //     USER.profile_photo.data = fs.readFileSync(profile_photo.path);
        //     USER.profile_photo.contentType = profile_photo.type;
        // }
        // await USER.save();


        const userId = USER._id
        console.log("userId>>>>AAAAAA>>>>:", userId)

        data_for_recipient_collection = {
            userId,
            gender,
            age,
            address
        }

        console.log("data_for_recipient_collection:", data_for_recipient_collection)

        const recipient_response = await recipient_model.create(data_for_recipient_collection);


        console.log("DDDDDDDDDDDD:", userId)

        res.status(201).send({
            success: true,
            message: "recipient Sign-Up Successfully!",
            USER,
            recipient_response
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Sign-Up Recipient",
            error,
        });
    }
};




async function recipient_login(req, res) {
    try {
        const { email, password } = req.body;

        // validation
        if (!email || !password) {
            return res.status(404).send({
                success: false,
                error: "Email and Password is require!",
            })
        }

        // check existing user
        const recipient = await user_model.findOne({ email }, { profile_photo: 0 });
        if (!recipient) {
            return res.status(404).send({
                success: false,
                message: "Email is not register, Please Sign-Up",
            })
        }

        const match = await comparePassword(password, recipient.password);

        if (!match) {
            return res.status(500).send({
                success: false,
                message: "Invalid Password",
            })
        }

        // token
        // const token = await JWT.sign({ _id: recipient._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
        const token = await JWT.sign({ _id: recipient._id }, "abdullah", { expiresIn: "7d" });

        const send_user = await user_model.findOne({ email }, { password: 0 });

        let updated_user;

        if (send_user && send_user.profile_photo?.data) {
            updated_user = {
                ...send_user._doc,
                profile_photo: `data:${send_user.profile_photo.contentType};base64,${send_user.profile_photo.data.toString("base64")}`
            };
        } else {
            updated_user = send_user; // fallback if there's no photo
        }

        const userId = send_user._id;

        const send_recipient = await recipient_model.findOne({ userId });
        const person = send_recipient.person;

        res.status(200).send({
            success: true,
            message: "Login Successfully!!",
            person,
            token,
            send_recipient,
            send_user:updated_user,
        })

    } catch (error) {
        console.log("***** Error in recipient_Login_Controller ********", error);
        res.status(500).send({
            success: false,
            message: "Error in recipient Login",
            error
        })
    }

}



// // get recipient
const get_recipient = async (req, res) => {
    try {
        const recipient = await recipient_model.findById(req.params.recipient_id);

        // console.log("recipient===", req.params.recipient_id)
        const get_user = await user_model.findById(recipient.userId).select("-password");

        // Modify Users to encode images as Base64

        const user = (() => {
            if (get_user.profile_photo && get_user.profile_photo.data) {
                return {
                    ...get_user._doc,
                    profile_photo: `data:${get_user.profile_photo.contentType};base64,${get_user.profile_photo.data.toString("base64")}`
                };
            }
            return get_user._doc || get_user; // fallback if _doc is not present
        })();

        // console.log("user===", user)
        // const recipient = { user + recipient };
        // const recipient = Object.assign({}, user, recipient);

        res.status(200).send({
            success: true,
            message: "get recipient",
            user,
            recipient,
            // recipient,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while getting recipient",
            error,
        });
    }
};




// // delete recipient
const delete_account = async (req, res) => {
    try {

        const { recipient_id } = req.params;

        // Step 1: Find the recipient
        const recipient = await recipient_model.findById(recipient_id);
        if (!recipient) {
            return res.status(404).json({ message: 'recipient not found' });
        }

        const user_id = recipient.userId;

        // Step 2: Delete the user
        await user_model.findByIdAndDelete(user_id);

        // Step 3: Optionally delete the recipient as well
        await recipient_model.findByIdAndDelete(recipient_id);

        // Step 3: Find if any blood requests exist for this recipient
        const existingRequests = await blood_request_model.find({ recipient_id });

        // Step 4: Delete those requests
        if (existingRequests.length >= 1) {
            const result = await blood_request_model.deleteMany({ recipient_id });
        }
        await notification_model.deleteMany({ recipient_id });

        // return res.status(200).json({ message: 'Account deleted successfully' });

        res.status(200).send({
            success: true,
            message: "Account deleted successfully",
        });

    } catch (error) {
        console.log('Delete recipient Account Error:', error);
        res.status(500).send({
            success: false,
            message: "Delete recipient Account Error",
            error: error,
        });
    }
};




// //follow a user
// // mery khayal sy "req.params.id" mey friend ki id dy gy
// // or "req.body.userId" mey currentUser (login user) ki id dy gy

// // followers (mtlb jo aap ko follow kry)
// // followings (mtlb jisy hm follow kry)
// const follow_to_user = async (req, res) => {
//     if (req.body.userId !== req.params.id) {
//         try {
//             const user = await recipient_model.findById(req.params.id);
//             const currentUser = await recipient_model.findById(req.body.userId);
//             if (!user.followers.includes(req.body.userId)) {
//                 await user.updateOne({ $push: { followers: req.body.userId } });
//                 await currentUser.updateOne({ $push: { followings: req.params.id } });
//                 await user.updateOne({ $push: { friends: req.body.userId } });
//                 await currentUser.updateOne({ $push: { friends: req.params.id } });
//                 res.status(200).json("user has been followed");
//             } else {
//                 res.status(403).json("you allready follow this user");
//             }
//         } catch (err) {
//             res.status(500).json(err);
//         }
//     } else {
//         res.status(403).json("you cant follow yourself");
//     }
// }


// const get_friends = async (req, res) => {
//     try {
//         const user = await recipient_model.findById(req.params.userId);


//         // Log the user and friends field to debug
//         console.log("User:", user);
//         console.log("Friends:", user?.friends);

//         if (!user || !user.friends || !Array.isArray(user.friends)) {
//             return res.status(404).json({ message: "User or friends not found." });
//         }


//         const friends = await Promise.all(
//             user.friends.map((friendId) => {
//                 return recipient_model.findById(friendId);
//             })
//         );
//         let friendList = [];
//         friends.map((friend) => {
//             const { _id, username, profilePicture } = friend;
//             friendList.push({ _id, username, profilePicture });
//         });
//         res.status(200).json(friendList)
//     } catch (err) {
//         res.status(500).json(err);
//     }
// }



// //unfollow a user
// const unfollow_to_user = async (req, res) => {
//     if (req.body.userId !== req.params.id) {
//         try {
//             const user = await recipient_model.findById(req.params.id);
//             const currentUser = await recipient_model.findById(req.body.userId);
//             if (user.followers.includes(req.body.userId)) {
//                 await user.updateOne({ $pull: { followers: req.body.userId } });
//                 await currentUser.updateOne({ $pull: { followings: req.params.id } });
//                 res.status(200).json("user has been unfollowed");
//             } else {
//                 res.status(403).json("you dont follow this user");
//             }
//         } catch (err) {
//             res.status(500).json(err);
//         }
//     } else {
//         res.status(403).json("you cant unfollow yourself");
//     }
// };




























// //export All functions from "Controller"
module.exports = {
    testController, recipient_signUp, recipient_login, get_recipient, delete_account,
    //    follow_to_user, get_friends, unfollow_to_user
}
