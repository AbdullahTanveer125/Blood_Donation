const donor_model = require("../Models-Schema/donor_schema")
const user_model = require("../Models-Schema/user_schema")
const blood_request_model = require("../Models-Schema/blood_Request_Schema")
const { hashPassword, comparePassword } = require("../Middleware/hash_password");



const fs = require("fs");
const JWT = require("jsonwebtoken");






async function testController(req, res) {
    res.send({
        message: "We are in << Donor >> test function !!"
    })
}



// // ********************************************************************************
// //jb hm image ko receive kr rahy ho to phir data "req.fields" mey receive hota 
// // hai or image ko hm "req.files" sy get kry gy
const donor_signUp = async (req, res) => {
    try {
        const { name, username, email, password, phone, gender, age, weight, blood_group, address, last_time_donation_date, nearest_hospital, person } = req.fields;
        const { profile_photo } = req.files;


        // console.log("Incoming request data:", req.fields);
        // console.log("user name>>>>>>>>", username);



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
            case !weight:
                return res.status(500).send({ error: "weight is Required" });
            case !blood_group:
                return res.status(500).send({ error: "Blood Group is Required" });
            case !address:
                return res.status(500).send({ error: "Address is Required" });
            case !last_time_donation_date:
                return res.status(500).send({ error: "Last Time Donation Date is Required" });
            case !nearest_hospital:
                return res.status(500).send({ error: "nearest_hospital is Required" });
            case !person:
                return res.status(500).send({ error: "person is Required in sign-up" });
            case profile_photo && profile_photo.size > 1000000:
                return res.status(500).send({ error: "profile_photo is Required and should be less then 1MB" });
        }

        if (!username) {
            return res.status(400).json({ success: false, error: "Username is required and cannot be null." });
        }


        // check existing Donor
        const existingDonor = await user_model.findOne({ email })

        if (existingDonor) {
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

        const existing_phone = await user_model.findOne({ phone })
        if (existing_phone) {
            res.status(200).send({
                success: false,
                message: "Phone Number already exist, please edit your Phone Number!",
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

        // const real_date = string_Into_Date(last_time_donation_date)
        // const real_date = last_time_donation_date
        // console.log("*****************************************************")
        // console.log("real date:", real_date)
        // console.log("*****************************************************")


        // const fullname = firstname + " " + lastname

        data_for_user_collection = {
            name,
            username,
            email,
            password: hashedPassword,
            phone,
            person
        }

        // console.log("*****************************************************")
        // console.log("usernameMMMMMMMMMM:", username)
        // console.log("*****************************************************")

        // await user_model.deleteMany({ username: null });


        const USER = new user_model(data_for_user_collection);


        // const USER = new user_Model({ ...req.fields, slug: slugify(firstname) });

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


        // console.log("*****************************************************")
        // console.log("usernameLLLLLLLLLLLLL:", username)
        // console.log("*****************************************************")

        // console.log("*******************USER************************************")
        // console.log(USER)
        // console.log("USER>>>>>>MMM>>>>:", USER.username)
        // console.log("**********************SSSS*USER********************************")

        const userId = USER._id
        // console.log("userId>>>>AAAAAA>>>>:", userId)

        data_for_donor_collection = {
            userId,
            gender,
            age,
            weight,
            blood_group,
            address,
            last_time_donation_date,
            nearest_hospital,
        }

        console.log("data_for_donor_collection:", data_for_donor_collection)

        const donor_response = await donor_model.create(data_for_donor_collection);


        console.log("DDDDDDDDDDDD:", userId)

        res.status(201).send({
            success: true,
            message: "Donor Sign-Up Successfully!",
            USER,
            donor_response
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Sign-Up Donor",
            error,
        });
    }
};




async function donor_login(req, res) {
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
        const donor = await user_model.findOne({ email }, { profile_photo: 0 });
        // console.log("Donor=", donor)

        if (!donor) {
            return res.status(404).send({
                success: false,
                message: "Email is not register, Please Sign-Up",
            })
        }

        const match = await comparePassword(password, donor.password);

        if (!match) {
            return res.status(200).send({
                success: false,
                message: "Invalid Password",
            })
        }

        // token
        // const token = await JWT.sign({ _id: donor._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
        const token = await JWT.sign({ _id: donor._id }, "abdullah", { expiresIn: "7d" });

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

        // Modify events to encode images as Base64
        // Copy send_user object
        // const updated_send_user = { ...send_user };


        // // Check if profile_photo exists and has data
        // if (send_user.profile_photo && send_user.profile_photo.data) {
        //     updated_send_user.profile_photo = `data:${send_user.profile_photo.contentType};base64,${send_user.profile_photo.data.toString("base64")}`;
        // }

        // console.log("updated_send_user=", updated_send_user);


        const userId = send_user._id;

        const send_donor = await donor_model.findOne({ userId });
        const person = send_donor.person;

        res.status(200).send({
            success: true,
            message: "Login Successfully!!",
            // updated_user,
            send_donor,
            person,
            token,
            send_user: updated_user,
        })

    } catch (error) {
        console.log("***** Error in Donor_Login_Controller ********", error);
        res.status(500).send({
            success: false,
            message: "Error in Donor Login",
            error
        })
    }
}


// // get donor
const get_donor = async (req, res) => {
    try {
        const user = await user_model.findById(req.params.user_id).select('-profile_photo -password');

        const donor = await donor_model.findOne({ userId: user._id });

        // const DONOR = { user + donor };
        // const DONOR = Object.assign({}, user, donor);

        res.status(200).send({
            success: true,
            message: "get Donor",
            user,
            donor,
            // DONOR,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while getting Donor",
            error,
        });
    }
};



// // get all donors
const get_all_donor = async (req, res) => {
    try {

        const Donors = await donor_model.find({ availability: true }).sort({ createdAt: -1 });


        const donor_User_Ids = Donors.map(donor => donor.userId); // Extract userId values

        // Find users whose _id is in the donorUserIds array
        const Users = await user_model.find({ _id: { $in: donor_User_Ids } }).sort({ createdAt: -1 });


        const mergedData = Users.map(user => {
            const donor = Donors.find(d => d.userId.toString() === user._id.toString());
            return {
                ...user.toObject(),  // Convert Mongoose document to plain object
                donorDetails: donor ? donor.toObject() : null,  // Attach donor details if found
            };
        });

        // console.log(mergedData);

        // Modify Users to encode images as Base64
        const All_Donors = mergedData.map(event => {
            if (event.profile_photo && event.profile_photo.data) {
                return {
                    ...event, // Spread existing event fields
                    profile_photo: `data:${event.profile_photo.contentType};base64,${event.profile_photo.data.toString("base64")}`
                };
            }
            return event;
        });

        console.log("All_Donors=", All_Donors[0].username);
        console.log("All_Donors=", All_Donors[0].donorDetails.gender);
        console.log("Array All_Donors=", All_Donors);

        res.status(200).send({
            success: true,
            message: "get All Donors",
            Total_users: All_Donors.length,
            All_Donors,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Erorr in getting All_Users",
            error: error,
        });
    }
};





// // delete donors
const delete_account = async (req, res) => {
    try {

        const { donor_id } = req.params;

        // Step 1: Find the donor
        const donor = await donor_model.findById(donor_id);
        if (!donor) {
            return res.status(404).json({ message: 'Donor not found' });
        }

        const user_id = donor.userId;

        // Step 2: Delete the user
        await user_model.findByIdAndDelete(user_id);

        // Step 3: Optionally delete the donor as well
        await donor_model.findByIdAndDelete(donor_id);

        // Step 3: Find if any blood requests exist for this donor
        const existingRequests = await blood_request_model.find({ donor_id });

        // Step 4: Delete those requests
        if (existingRequests.length >= 1) {
            const result = await blood_request_model.deleteMany({ donor_id });
        }
        

        // return res.status(200).json({ message: 'Account deleted successfully' });

        res.status(200).send({
            success: true,
            message: "Account deleted successfully",
        });

    } catch (error) {
        console.log('Delete Donor Account Error:', error);
        res.status(500).send({
            success: false,
            message: "Delete Donor Account Error",
            error: error,
        });
    }
};




























// //export All functions from "Controller"
module.exports = {
    testController, donor_signUp, donor_login, get_donor, get_all_donor, delete_account
}
