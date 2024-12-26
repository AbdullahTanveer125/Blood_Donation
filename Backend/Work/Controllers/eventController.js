const event_model = require("../Models-Schema/eventSchema")

const JWT = require("jsonwebtoken");






async function testController(req, res) {
    res.send({
        message: "We are in << Event >> test function !!"
    })
}


const add_event = async (req, res) => {
    try {
        const { name, organization_name, email, phone, time, location, city, description, date } = req.body;

        console.log("***req.body:***", req.body)
        //validation
        switch (true) {
            case !name:
                return res.status(500).send({ error: "Name is Required" });
            case !email:
                return res.status(500).send({ error: "Email is Required" });
            case !phone:
                return res.status(500).send({ error: "phone is Required" });
            case !organization_name:
                return res.status(500).send({ error: "organization_name is Required" });
            case !time:
                return res.status(500).send({ error: "time is Required" });
            case !location:
                return res.status(500).send({ error: "location is Required" });
            case !city:
                return res.status(500).send({ error: "City is Required" });
            case !description:
                return res.status(500).send({ error: "description is Required" });
            case !date:
                return res.status(500).send({ error: "date is Required" });
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
        const real_date = date
        console.log("*****************************************************")
        console.log("real date:", real_date)
        console.log("*****************************************************")


        // const fullname = firstname + " " + lastname
        // name, organization_name, email, phone, location, city, description, date
        const EVENT = {
            name,
            organization_name,
            email,
            phone,
            time,
            location,
            city,
            description,
            date,
        }

        const result = await event_model.create(EVENT);
        console.log(result);


        res.status(200).send({
            success: true,
            message: "Add New Event Successfully!!",
            EVENT,
        })



    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Add Event",
            error,
        });
    }
};


// get-all-blood-request
const get_all_events = async (req, res) => {
    try {
        const All_Events = await event_model.find({}).limit(10).sort({ createdAt: -1 });
        res.status(200).send({
            success: true,
            message: "get ALL Events",
            All_Events,
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


// // get single event
const get_single_event = async (req, res) => {
    try {
        const Single_Event = await event_model.findById(req.params.event_id);
        res.status(200).send({
            success: true,
            message: "get Single event",
            Single_Event,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while getting single Event",
            error,
        });
    }
};


// //delete controller
const delete_event = async (req, res) => {
    try {
        await event_model.findByIdAndDelete(req.params.event_id);
        res.status(200).send({
            success: true,
            message: "Event is Deleted successfully!",
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while deleting Event",
            error,
        });
    }
};


// DELETE all events
const delete_all_events= async (req, res) => {
    try {
        const result = await event_model.deleteMany({});
        return res.status(200).json({
            success: true,
            message: "All Events have been successfully deleted.",
            deletedCount: result.deletedCount,
        });
    } catch (error) {
        console.error("Error deleting all events:", error);
        return res.status(500).json({
            message: "An error occurred while deleting all events.",
            error: error.message,
        });
    }
};
























//export All functions from "Controller"
module.exports = { testController, add_event, get_all_events, get_single_event, delete_event, delete_all_events }