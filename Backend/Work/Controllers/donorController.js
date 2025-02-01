const donor_model = require("../Models-Schema/donor_schema")
const user_model = require("../Models-Schema/user_schema")
const { hashPassword, comparePassword } = require("../Middleware/hash_password");



const fs = require("fs");
const JWT=require("jsonwebtoken");






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
        const { name, username, email, password, phone, gender, age, weight, blood_group, address, last_time_donation_date, nearest_hospital } = req.fields;
        const { profile_photo } = req.files;


        console.log("Incoming request data:", req.fields);
        console.log("user name>>>>>>>>", username);



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
        const real_date = last_time_donation_date
        console.log("*****************************************************")
        console.log("real date:", real_date)
        console.log("*****************************************************")


        // const fullname = firstname + " " + lastname

        data_for_user_collection = {
            name,
            username,
            email,
            password: hashedPassword,
            phone,
        }

        console.log("*****************************************************")
        console.log("usernameMMMMMMMMMM:", username)
        console.log("*****************************************************")

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


        console.log("*****************************************************")
        console.log("usernameLLLLLLLLLLLLL:", username)
        console.log("*****************************************************")

        console.log("*******************USER************************************")
        // console.log(USER)
        console.log("USER>>>>>>MMM>>>>:", USER.username)
        console.log("**********************SSSS*USER********************************")
        
        const userId = USER._id
        console.log("userId>>>>AAAAAA>>>>:", userId)

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
        const donor = await user_model.findOne({ email }, {photo: 0});
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

        const send_user = await user_model.findOne({ email }, {profile_photo: 0, password:0});

        const userId=send_user._id;

        const send_donor = await donor_model.findOne({ userId });
        const person=send_donor.person;

        res.status(200).send({
            success: true,
            message: "Login Successfully!!",
            send_user,
            send_donor,
            person,
            token,
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
        
        const donor = await donor_model.findOne({userId:user._id});

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
































// //export All functions from "Controller"
module.exports = {
    testController, donor_signUp, donor_login, get_donor
}
