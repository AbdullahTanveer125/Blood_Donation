const event_model = require("../Models-Schema/event_Schema")
const organization_model = require("../Models-Schema/organization_schema")
const user_model = require("../Models-Schema/user_schema")

const JWT = require("jsonwebtoken");

const fs = require("fs");





async function testController(req, res) {
    res.send({
        message: "We are in << Event >> test function !!"
    })
}


//Add new event
const add_event = async (req, res) => {
    try {
        console.log("Incoming req.fields:", req.fields);

        const { name, organization_name, date, time, eventDateTime, location, description, phone } = req.fields;
        // console.log("Incoming req.fields:", req.files);
        // const { organization_photo } = req.files;

        // console.log("Incoming request data:", req.fields);

        const organization_id = req.params.organization_id;

        // console.log("***req.body:***", req.body)
        console.log("*****************************************************")
        // console.log("date:", date)
        // console.log("organization_photo:", organization_photo)
        console.log("*****************************************************")

        //validation
        switch (true) {
            case !name:
                return res.status(500).send({ error: "Name is Required" });
            case !phone:
                return res.status(500).send({ error: "phone is Required" });
            case !organization_name:
                return res.status(500).send({ error: "organization_name is Required" });
            case !time:
                return res.status(500).send({ error: "time is Required" });
            case !location:
                return res.status(500).send({ error: "location is Required" });
            case !description:
                return res.status(500).send({ error: "description is Required" });
            case !eventDateTime:
                return res.status(500).send({ error: "eventDateTime is Required" });

            case !date:
                return res.status(500).send({ error: "date is Required" });
            // case organization_photo && organization_photo.size > 1000000:
            //     return res.status(500).send({ error: "organization_photo is Required and should be less then 1MB" });
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
        // const real_date = date
        // console.log("*****************************************************")
        // console.log("real date:", real_date)
        // console.log("*****************************************************")

        const organization = await organization_model.findById(organization_id);

        const organization_photo = await user_model.findById(organization.userId).select('profile_photo');

        // console.log("profile_photo==", organization_photo)

        const EVENT_DATA = {
            organization_id,
            name,
            organization_name,
            phone,
            time,
            location,
            eventDateTime: new Date(eventDateTime),
            description,
            date,
            organization_photo: organization_photo?.profile_photo,
        }

        const EVENT = new event_model(EVENT_DATA);

        await EVENT.save();
        // const EVENT = new event_model({ ...req.fields, slug: slugify(firstname) });

        // if (organization_photo) {
        //     EVENT.organization_photo.data = fs.readFileSync(organization_photo.path);
        //     EVENT.organization_photo.contentType = organization_photo.type;
        // }

        // const result = await EVENT.save();
        // const EVENT = await productModel.create({ ...req.fields, slug: slugify(name) });
        // if (organization_photo) {
        //     EVENT.organization_photo.data = fs.readFileSync(organization_photo.path);
        //     EVENT.organization_photo.contentType = organization_photo.type;
        // }
        // await EVENT.save();


        // const result = await event_model.create(EVENT);
        // console.log(result);


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




// get events of specific / particular organization
const get_specific_event = async (req, res) => {
    try {
        const EVENT = await event_model.find({ organization_id: req.params.organization_id }).sort({ createdAt: -1 }); // Sorting by createdAt in descending order (recent first)


        //mongoDB store image in buffer for but when image get in frontend then image is display in buffer form. So, need to convert "Buffer to toString('base64')" to display image. but good approach is convert image form from "Buffer to toString('base64')" in backend and then send to frontend 

        // Modify events to encode images as Base64
        const modifiedEvents = EVENT.map(event => {
            if (event.organization_photo && event.organization_photo.data) {
                return {
                    ...event._doc, // Spread existing event fields
                    organization_photo: `data:${event.organization_photo.contentType};base64,${event.organization_photo.data.toString("base64")}`
                };
            }
            return event;
        });

        console.log("Event length=", modifiedEvents.length)
        const length_of_events = modifiedEvents.length

        res.status(200).send({
            success: true,
            message: "get event of specific organization",
            // EVENT,
            modifiedEvents,
            length_of_events
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while getting event of specific organization",
            error,
        });
    }
};





// get-all-blood-request
const get_all_events = async (req, res) => {
    try {
        const Events = await event_model.find({}).sort({ createdAt: -1 });

        // Modify events to encode images as Base64
        const All_Events = Events.map(event => {
            if (event.organization_photo && event.organization_photo.data) {
                return {
                    ...event._doc, // Spread existing event fields
                    organization_photo: `data:${event.organization_photo.contentType};base64,${event.organization_photo.data.toString("base64")}`
                };
            }
            return event;
        });



        res.status(200).send({
            success: true,
            message: "get ALL Events",
            All_Events,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Erorr in getting All_Events",
            error: error,
        });
    }
};


// get single event
const get_single_event = async (req, res) => {
    try {

        console.log("idd====", req.params.event_id)
        const Single_Event = await event_model.findById(req.params.event_id);

        console.log("11 Single event ===", Single_Event)

        if (Single_Event && Single_Event.organization_photo && Single_Event.organization_photo.data) {
            Single_Event = {
                ...Single_Event._doc,
                organization_photo: `data:${Single_Event.organization_photo.contentType};base64,${Single_Event.organization_photo.data.toString("base64")}`
            };
        }

        console.log("22 Single event ===", Single_Event)

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
        const result = await event_model.deleteOne({ _id: req.params.event_id });

        res.status(200).send({
            success: true,
            message: "Event is Deleted successfully!",
            deletedCount: result.deletedCount,
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
const delete_all_events = async (req, res) => {
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
module.exports = { testController, add_event, get_specific_event, get_all_events, get_single_event, delete_event, delete_all_events }