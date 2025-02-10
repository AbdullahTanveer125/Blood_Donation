const user_model = require("../Models-Schema/user_schema")
const our_feedback_model = require("../Models-Schema/our_feedback_Schema")


const JWT = require("jsonwebtoken");

const fs = require("fs");





async function testController(req, res) {
    res.send({
        message: "We are in << our_feedback >> test function !!"
    })
}


//Add new event
const add_our_feedback = async (req, res) => {
    try {
        // console.log("Incoming req.fields:", req.fields);

        const { user_id, username, person, comment } = req.fields;
        // console.log("Incoming req.fields:", req.files);
        const { user_photo } = req.files;

        // console.log("Incoming request data:", req.fields);
        //validation
        switch (true) {
            case !user_id:
                return res.status(500).send({ error: "user_id is Required" });
            case !username:
                return res.status(500).send({ error: "user_username is Required" });
            case !person:
                return res.status(500).send({ error: "person is Required" });
            case !comment:
                return res.status(500).send({ error: "comment is Required" });
            case user_photo && user_photo.size > 1000000:
                return res.status(500).send({ error: "user_photo is Required and should be less then 1MB" });
        }


        const our_feedback_DATA = {
            user_id,
            username,
            person,
            comment
        }

        const ADD = new our_feedback_model(our_feedback_DATA);

        if (user_photo) {
            ADD.user_photo.data = fs.readFileSync(user_photo.path);
            ADD.user_photo.contentType = user_photo.type;
        }

        const result = await ADD.save();

        console.log(result);


        res.status(200).send({
            success: true,
            message: "Add New our_feedback Successfully!!",
            our_feedback: result,
        })



    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Add our_feedback",
            error,
        });
    }
};




// get events of specific / particular organization
// const get_specific_our_feedback = async (req, res) => {
//     try {
//         const EVENT = await event_model.find({ organization_id: req.params.organization_id }).sort({ createdAt: -1 }); // Sorting by createdAt in descending order (recent first)


//         //mongoDB store image in buffer for but when image get in frontend then image is display in buffer form. So, need to convert "Buffer to toString('base64')" to display image. but good approach is convert image form from "Buffer to toString('base64')" in backend and then send to frontend 

//         // Modify events to encode images as Base64
//         const modifiedEvents = EVENT.map(event => {
//             if (event.organization_photo && event.organization_photo.data) {
//                 return {
//                     ...event._doc, // Spread existing event fields
//                     organization_photo: `data:${event.organization_photo.contentType};base64,${event.organization_photo.data.toString("base64")}`
//                 };
//             }
//             return event;
//         });


//         res.status(200).send({
//             success: true,
//             message: "get event of specific organization",
//             EVENT,
//             modifiedEvents
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({
//             success: false,
//             message: "Error while getting event of specific organization",
//             error,
//         });
//     }
// };





// get-all-blood-request
const get_all_our_feedback = async (req, res) => {
    try {
        const users_with_our_feedback = await user_model.find({
            our_feedback: { $exists: true, $ne: null, $nin: [''] }
        }).select('username person our_feedback profile_photo').sort({ createdAt: -1 });

        console.log("users_with_our_feedback=", users_with_our_feedback)

        // Modify events to encode images as Base64
        const All_our_feedbacks = users_with_our_feedback.map(event => {
            if (event.profile_photo && event.profile_photo.data) {
                return {
                    ...event._doc, // Spread existing event fields
                    profile_photo: `data:${event.profile_photo.contentType};base64,${event.profile_photo.data.toString("base64")}`
                };
            }
            return event;
        });



        res.status(200).send({
            success: true,
            message: "get ALL our_feedbacks",
            All_our_feedbacks,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Erorr in getting All_our_feedbacks",
            error: error,
        });
    }
};


// get single event
// const get_single_our_feedback = async (req, res) => {
//     try {
//         const Single_Event = await event_model.findById(req.params.event_id);
//         res.status(200).send({
//             success: true,
//             message: "get Single event",
//             Single_Event,
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({
//             success: false,
//             message: "Error while getting single Event",
//             error,
//         });
//     }
// };


// //delete controller
// const delete_our_feedback = async (req, res) => {
//     try {
//         const result = await event_model.deleteOne({ _id: req.params.event_id });

//         res.status(200).send({
//             success: true,
//             message: "Event is Deleted successfully!",
//             deletedCount: result.deletedCount,
//         });
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({
//             success: false,
//             message: "Error while deleting Event",
//             error,
//         });
//     }
// };


// DELETE all events
// const delete_all_our_feedback = async (req, res) => {
//     try {
//         const result = await event_model.deleteMany({});
//         return res.status(200).json({
//             success: true,
//             message: "All Events have been successfully deleted.",
//             deletedCount: result.deletedCount,
//         });
//     } catch (error) {
//         console.error("Error deleting all events:", error);
//         return res.status(500).json({
//             message: "An error occurred while deleting all events.",
//             error: error.message,
//         });
//     }
// };
























//export All functions from "Controller"
module.exports = {
    testController, add_our_feedback, get_all_our_feedback,
    // get_specific_our_feedback, get_single_our_feedback, delete_our_feedback, delete_all_our_feedback 
}