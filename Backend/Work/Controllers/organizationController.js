// const organization_model = require("../Models-Schema/organizaionSchema")
const organization_model = require("../Models-Schema/organizationSchema")
const { hashPassword, comparePassword } = require("../Middleware/hash_password");



const fs = require("fs");
const JWT=require("jsonwebtoken");






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
        const { name, username, email, password, gender, age, weight, phone, address, city, last_time_donation_date } = req.fields;
        const { photo } = req.files;
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
            case !gender:
                return res.status(500).send({ error: "Gender is Required" });
            case !age:
                return res.status(500).send({ error: "Age is Required" });
            case !weight:
                return res.status(500).send({ error: "weight is Required" });
            case !phone:
                return res.status(500).send({ error: "phone is Required" });
            case !address:
                return res.status(500).send({ error: "Address is Required" });
            case !city:
                return res.status(500).send({ error: "City is Required" });
            case !last_time_donation_date:
                return res.status(500).send({ error: "Last Time Donation Date is Required" });
            case photo && photo.size > 1000000:
                return res.status(500).send({ error: "photo is Required and should be less then 1MB" });
        }

        // check existing organizaion
        const existingorganization = await organization_model.findOne({ email })

        if (existingorganization) {
            res.status(200).send({
                success: false,
                message: "You are already exist, please login",
            })
        }

        const existingUsername = await organization_model.findOne({ username })
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

        SignUp_organization = {
            name,
            // fullname,
            password: hashedPassword,
            username,
            email,
            gender,
            age,
            weight,
            phone,
            address,
            city,
            last_time_donation_date: real_date,
        }


        const ORGANIZATION = new organization_model(SignUp_organization);


        // const ORGANIZATION = new organizaionModel({ ...req.fields, slug: slugify(firstname) });

        if (photo) {
            ORGANIZATION.photo.data = fs.readFileSync(photo.path);
            ORGANIZATION.photo.contentType = photo.type;
        }
        await ORGANIZATION.save();
        // const ORGANIZATION = await productModel.create({ ...req.fields, slug: slugify(name) });
        // if (photo) {
        //     ORGANIZATION.photo.data = fs.readFileSync(photo.path);
        //     ORGANIZATION.photo.contentType = photo.type;
        // }
        // await ORGANIZATION.save();
        res.status(201).send({
            success: true,
            message: "Organization Sign-Up Successfully!",
            ORGANIZATION,
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
        const organization = await organization_model.findOne({ email }, {photo: 0});
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

        res.status(200).send({
            success: true,
            message: "Login Successfully!!",
            organization,
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


































//export All functions from "Controller"
module.exports = { testController, organization_signUp, organization_login }
