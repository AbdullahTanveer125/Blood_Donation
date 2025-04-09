const feedback_model = require("../Models-Schema/feedback_Schema")
const donor_model = require("../Models-Schema/donor_schema")
const recipient_model = require("../Models-Schema/recipient_schema")
const user_model = require("../Models-Schema/user_schema")
const blood_request_model = require("../Models-Schema/blood_Request_Schema")

const JWT = require("jsonwebtoken");






async function testController(req, res) {
    res.send({
        message: "We are in << Feedback >> test function !!"
    })
}

// Add new feedback
const add_feedback = async (req, res) => {
    try {
        const recipient_id = req.params.recipient_id;
        const blood_request_id = req.params.blood_request_id;
        const { username, description, rating } = req.body;

        console.log("blood request _id=", blood_request_id)




        const get_donor_user_id = await user_model.findOne({ username }).select('_id');

        if (!get_donor_user_id) {
            return res.status(404).json({ success: false, message: "Invalid username!" });
        }


        // console.log("get_donor_user_id._id=", get_donor_user_id._id)
        user_id_of_donor = get_donor_user_id._id

        const get_donor_id = await donor_model.findOne({ userId: user_id_of_donor }).select('_id');

        console.log("get_donor_id=", get_donor_id)

        donor_id = get_donor_id
        donor_username = username


        // By default, findByIdAndUpdate() returns the old document — the one before the update.

        // If you want the updated document returned instead, you need to pass { new: true }
        const updated_in_blood_request_model = await blood_request_model.findByIdAndUpdate(
            blood_request_id,
            {
                donor_id: donor_id,
                recipient_id: null
            },
            { new: true }
        );

        console.log("updated_in_blood_request_model=", updated_in_blood_request_model)

        // console.log("Donor id=", donor_id)
        // console.log("Donor username=", donor_username)


        // const DONOR = await donor_model.findById(donor_id)
        const RECIPIENT_userId = await recipient_model.findById(recipient_id).select('userId')

        // console.log("DONOR=", DONOR)
        // console.log("RECIPIENT_userId=", RECIPIENT_userId)
        // console.log("RECIPIENT_userId=", RECIPIENT_userId.userId)
        user_id_of_recipient = RECIPIENT_userId.userId;


        const get_object_of_recipient_username = await user_model.findById(user_id_of_recipient).select("username");

        let recipient_username = get_object_of_recipient_username.username


        //validation
        switch (true) {
            case !description:
                return res.status(500).send({ error: "description is Required" });
            // case !rating:
            // return res.status(500).send({ error: "rating is Required" });
        }

        const FEEDBACK = {
            donor_id,
            recipient_id,
            donor_username,
            recipient_username,
            description,
            rating
        }

        const result = await feedback_model.create(FEEDBACK);
        console.log(result);


        res.status(200).send({
            success: true,
            message: "Add New feedback Successfully!!",
            FEEDBACK,
        })



    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in Add feedback",
            error,
        });
    }
};

// get-all-feedbacks from donor_id 
const get_all_feedbacks_of_donor = async (req, res) => {
    try {
        const donor_id = req.params.donor_id;

        const All_Feedbacks = await feedback_model.find({ donor_id }).limit(10).sort({ createdAt: -1 });

        res.status(200).send({
            success: true,
            message: "get ALL feedbacks",
            All_Feedbacks,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Erorr in getting All_feedbacks",
            error: error,
        });
    }
};



// get-all-feedbacks from recipient_id 
const get_all_feedbacks_of_recipient = async (req, res) => {
    try {
        const recipient_id = req.params.recipient_id;

        const All_Feedbacks = await feedback_model.find({ recipient_id }).limit(10).sort({ createdAt: -1 });

        res.status(200).send({
            success: true,
            message: "get ALL feedbacks",
            All_Feedbacks,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Erorr in getting All_feedbacks",
            error: error,
        });
    }
};


// // // get single feedback
const get_single_feedback = async (req, res) => {
    try {
        const Single_Feedback = await feedback_model.findById(req.params.feedback_id);
        res.status(200).send({
            success: true,
            message: "get Single feedback",
            Single_Feedback,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while getting single feedback",
            error,
        });
    }
};


// // //delete feedback
const delete_feedback = async (req, res) => {
    try {

        const result = await feedback_model.deleteOne({ _id: req.params.feedback_id });

        // const result = await feedback_model.findByIdAndDelete(req.params.feedback_id);
        res.status(200).send({
            success: true,
            message: "feedback is Deleted successfully!",
            deletedCount: result.deletedCount,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while deleting feedback",
            error,
        });
    }
};


// // DELETE all feedbacks
const delete_all_feedbacks = async (req, res) => {
    try {
        const result = await feedback_model.deleteMany({});
        return res.status(200).json({
            success: true,
            message: "All feedbacks have been successfully deleted.",
            deletedCount: result.deletedCount,
        });
    } catch (error) {
        console.error("Error deleting all feedbacks:", error);
        return res.status(500).json({
            message: "An error occurred while deleting all feedbacks.",
            error: error.message,
        });
    }
};
























//export All functions from "Controller"
module.exports = { testController, add_feedback, get_all_feedbacks_of_donor, get_all_feedbacks_of_recipient, get_single_feedback, delete_feedback, delete_all_feedbacks }


