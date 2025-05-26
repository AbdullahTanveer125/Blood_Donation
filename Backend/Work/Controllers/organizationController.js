// const organization_model = require("../Models-Schema/organizaionSchema")
const organization_model = require("../Models-Schema/organization_schema")
const user_model = require("../Models-Schema/user_schema")
const event_model = require("../Models-Schema/event_Schema")

const { hashPassword, comparePassword } = require("../Middleware/hash_password");



const fs = require("fs");
const JWT = require("jsonwebtoken");






async function testController(req, res) {
    res.send({
        message: "We are in << Organizaion >> test function !!"
    })
}



// ********************************************************************************
//jb hm image ko receive kr rahy ho to phir data "req.fields" mey receive hota 
// hai or image ko hm "req.files" sy get kry gy
const organization_signUp = async (req, res) => {
    try {
        const { name, username, email, password, phone, website_url, location , person } = req.fields;
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
            case !website_url:
                return res.status(500).send({ error: "website_url is Required" });
            case !location:
                return res.status(500).send({ error: "website_url is Required" });
            case !person:
                return res.status(500).send({ error: "person is Required in sign-up" });
            case profile_photo && profile_photo.size > 1000000:
                return res.status(500).send({ error: "profile_photo is Required and should be less then 1MB" });
        }

        console.log("profile_photo", profile_photo)

        // check existing organizaion
        const existingorganization = await user_model.findOne({ email })

        if (existingorganization) {
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
            password: hashedPassword,
            username,
            email,
            phone,
            website_url,
            location,
            person
        }

        const USER = new user_model(data_for_user_collection);

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

        data_for_organization_collection = {
            userId,
            website_url,
            location,
        }

        console.log("data_for_organization_collection:", data_for_organization_collection)

        const organization_response = await organization_model.create(data_for_organization_collection);


        console.log("DDDDDDDDDDDD:", userId)


        res.status(201).send({
            success: true,
            message: "Organization Sign-Up Successfully!",
            USER,
            organization_response
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Sign-Up organization",
            error,
        });
    }
};




async function organization_login(req, res) {
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
        const organization = await user_model.findOne({ email }, { profile_photo: 0 });
        if (!organization) {
            return res.status(404).send({
                success: false,
                message: "Email is not register, Please Sign-Up",
            })
        }

        const match = await comparePassword(password, organization.password);

        if (!match) {
            return res.status(200).send({
                success: false,
                message: "Invalid Password",
            })
        }

        // token
        // const token = await JWT.sign({ _id: organization._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
        const token = await JWT.sign({ _id: organization._id }, "abdullah", { expiresIn: "7d" });

        const send_user = await user_model.findOne({ email }, { profile_photo: 0, password: 0 });

        const userId = send_user._id;

        const send_organization = await organization_model.findOne({ userId });
        const person = send_organization.person;

        res.status(200).send({
            success: true,
            message: "Login Successfully!!",
            send_user,
            send_organization,
            person,
            token,
        })

    } catch (error) {
        console.log("***** Error in organization_Login_Controller ********", error);
        res.status(500).send({
            success: false,
            message: "Error in organization Login",
            error
        })
    }
}



// // get organization
const get_organization = async (req, res) => {
    try {
        
        const organization = await organization_model.findById(req.params.organization_id);

        console.log("organization===", organization)
        const get_user = await user_model.findById(organization.userId).select("-password");

        
        // console.log("id===", organization.userId)
        // console.log("user===", get_user)
        
        
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

        res.status(200).send({
            success: true,
            message: "get organization",
            user,
            organization,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while getting organization",
            error,
        });
    }
};




// // delete organization
const delete_account = async (req, res) => {
    try {

        const { organization_id } = req.params;

        // Step 1: Find the organization
        const organization = await organization_model.findById(organization_id);
        if (!organization) {
            return res.status(404).json({ message: 'organization not found' });
        }

        const user_id = organization.userId;

        // Step 2: Delete the user
        await user_model.findByIdAndDelete(user_id);

        // Step 3: Optionally delete the organization as well
        await organization_model.findByIdAndDelete(organization_id);

        // Step 3: Delete those event
        await event_model.deleteMany({ organization_id });

        // return res.status(200).json({ message: 'Account deleted successfully' });

        res.status(200).send({
            success: true,
            message: "Account deleted successfully",
        });

    } catch (error) {
        console.log('Delete organization Account Error:', error);
        res.status(500).send({
            success: false,
            message: "Delete organization Account Error",
            error: error,
        });
    }
};







// get photo
const get_photo = async (req, res) => {
    try {
        const organization_photo = await user_model.findById(req.params.user_id).select('profile_photo');

        console.log("organization_photo:", organization_photo)

        res.status(200).send({
            success: true,
            message: "get organization photo",
            organization_photo,
            // user,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while getting organization",
            error,
        });
    }
};

































//export All functions from "Controller"
module.exports = { testController, organization_signUp, organization_login, get_photo, get_organization, delete_account }
