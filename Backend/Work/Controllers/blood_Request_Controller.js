const bloodRequest_model = require("../Models-Schema/blood_Request_Schema")

const JWT = require("jsonwebtoken");






async function testController(req, res) {
    res.send({
        message: "We are in << Blood Request >> test function !!"
    })
}


const add_bloodRequest = async (req, res) => {
    try {
        const { patient_name, blood_group, location, urgency, phone, comment, blood_need_date } = req.body;

        const recipient_id=req.params.recipient_id;

        console.log("***req.body:***", req.body)
        //validation
        switch (true) {
            case !patient_name:
                return res.status(500).send({ error: "patient_name is Required" });
            case !blood_group:
                return res.status(500).send({ error: "blood_group is Required" });
            case !location:
                return res.status(500).send({ error: "location is Required" });
            case !blood_group:
                return res.status(500).send({ error: "blood_group is Required" });
            case !urgency:
                return res.status(500).send({ error: "urgency is Required" });
            case !phone:
                return res.status(500).send({ error: "phone is Required" });
            case !comment:
                return res.status(500).send({ error: "comment is Required" });
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
            recipient_id,
            patient_name,
            blood_group,
            location,
            urgency,
            phone,
            comment,
            blood_need_date,
        }

        const result = await bloodRequest_model.create(Blood_Request);
        console.log(result);


        res.status(200).send({
            success: true,
            message: "Add New Blood Request Successfully!!",
            result,
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


// // get-all-blood-request
const get_all_blood_request = async (req, res) => {
    try {
        const All_Blood_Requests = await bloodRequest_model.find({}).sort({ createdAt: -1 });

        console.log("All_Blood_Requests=", All_Blood_Requests)
        res.status(200).send({
            success: true,
            message: "ALL Blood Request",
            All_Blood_Requests,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Erorr in getting All_Blood_Requests",
            error: error,
        });
    }
};


// get blood Request of specific / particular recipient
const get_specific_blood_request = async (req, res) => {
    try {
        const Blood_Request = await bloodRequest_model.find({ recipient_id: req.params.recipient_id }).sort({ createdAt: -1 }); // Sorting by createdAt in descending order (recent first)

        res.status(200).send({
            success: true,
            message: "get specific blood request",
            Blood_Request,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while getting blood requests of specific recipient",
            error,
        });
    }
};


// //delete controller
const delete_blood_request = async (req, res) => {
    try {
        await bloodRequest_model.findByIdAndDelete(req.params.blood_request_id);
        res.status(200).send({
            success: true,
            message: "Blood Request is Deleted successfully!",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while deleting blood request",
            error,
        });
    }
};


// // DELETE all blood requests
const delete_all_blood_requests= async (req, res) => {
    try {
        const result = await bloodRequest_model.deleteMany({});
        return res.status(200).json({
            success: true,
            message: "All blood requests have been successfully deleted.",
            deletedCount: result.deletedCount,
        });
    } catch (error) {
        console.error("Error deleting blood requests:", error);
        return res.status(500).json({
            message: "An error occurred while deleting blood requests.",
            error: error.message,
        });
    }
};



// // Search blood requests
const search_blood_requests= async (req, res) => {
    const { blood_type, location } = req.body;
    console.log("blood_type, location:",blood_type, location)

    try {
        const filter = {};
        
        // Dynamically add filters based on request body
        if (blood_type) {
            filter.blood_group = blood_type;
        }
        if (location) {
            filter.location = location
            // filter.location = { $regex: location, $options: 'i' }; // Case-insensitive search
        }

        console.log("Filter=",filter)

        const results = await bloodRequest_model.find(filter);
        console.log("result=",results)

        // Check if any results are found
        if (results.length === 0) {
            return res.status(404).json({ message: "No blood requests found matching the criteria." });
        }

        res.status(200).json(results);
    } catch (err) {
        res.status(500).json({ error: 'An error occurred while searching.' });
    }
}


















// //export All functions from "Controller"
module.exports = { testController, add_bloodRequest, get_all_blood_request, get_specific_blood_request, delete_blood_request, delete_all_blood_requests, search_blood_requests 
}
