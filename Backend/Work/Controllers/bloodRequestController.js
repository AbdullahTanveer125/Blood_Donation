const bloodRequest_model = require("../Models-Schema/bloodRequestSchema")

const JWT=require("jsonwebtoken");






async function testController(req, res) {
    res.send({
        message: "We are in << Blood Request >> test function !!"
    })
}


const add_bloodRequest = async (req, res) => {
    try {
        const { name, email, phone, blood_group, address, city, comment, priority, status, blood_need_date } = req.body;

        console.log("***req.body:***",req.body)
        //validation
        switch (true) {
            case !name:
                return res.status(500).send({ error: "Name is Required" });
            case !email:
                return res.status(500).send({ error: "Email is Required" });
            case !phone:
                return res.status(500).send({ error: "phone is Required" });
            case !blood_group:
                return res.status(500).send({ error: "blood_group is Required" });
            case !address:
                return res.status(500).send({ error: "Address is Required" });
            case !city:
                return res.status(500).send({ error: "City is Required" });
            case !comment:
                return res.status(500).send({ error: "comment is Required" });
            case !priority:
                return res.status(500).send({ error: "priority is Required" });
            case !status:
                return res.status(500).send({ error: "status is Required" });
            case !blood_need_date:
                return res.status(500).send({ error: "Last Time Donation Date is Required" });
            }

        
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
        const real_date = blood_need_date
        console.log("*****************************************************")
        console.log("real date:", real_date)
        console.log("*****************************************************")


        // const fullname = firstname + " " + lastname

        const Blood_Request = {
            name,
            email, 
            phone, 
            blood_group, 
            address, 
            city, 
            comment, 
            priority, 
            status, 
            blood_need_date,
        }

        const result = await bloodRequest_model.create(Blood_Request);
        console.log(result);


        res.status(200).send({
            success: true,
            message: "Add New Blood Request Successfully!!",
            Blood_Request,
        })


    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Add Blood Request",
            error,
        });
    }
};




//export All functions from "Controller"
module.exports = { testController, add_bloodRequest }
