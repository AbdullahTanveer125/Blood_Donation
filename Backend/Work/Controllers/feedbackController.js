const feedback_model = require("../Models-Schema/feedback_Schema")
const donor_model = require("../Models-Schema/donor_schema")
const recipient_model = require("../Models-Schema/recipient_schema")
const user_model = require("../Models-Schema/user_schema")

const JWT = require("jsonwebtoken");






async function testController(req, res) {
    res.send({
        message: "We are in << Feedback >> test function !!"
    })
}

// Add new feedback
const add_feedback = async (req, res) => {
    try {
        const { comment, rating } = req.body;
        const donor_id = req.params.donor_id;
        const recipient_id = req.params.recipient_id;

        // console.log("donor_id=",donor_id)
        // console.log("recipient_id=",recipient_id)

        const DONOR = await donor_model.findById(donor_id)
        const RECIPIENT = await recipient_model.findById(recipient_id)

        // console.log("DONOR=", DONOR)
        // console.log("RECIPIENT=", RECIPIENT)


        
        const donor_user = await user_model.findById(DONOR.userId).select("-profile_photo -password");
        const recipient_user = await user_model.findById(RECIPIENT.userId).select("-profile_photo -password");


        console.log("donor_user=", donor_user)
        console.log("recipient_user=", recipient_user)

        const donor_username= donor_user.username;
        const recipient_username= recipient_user.username;
        // const donor_user = await donor_model.findOne({ DONOR.userId: user._id });



        console.log("***donor_username:***", donor_username)
        console.log("***recipient_username:***", recipient_username)
        //validation
        switch (true) {
            case !comment:
                return res.status(500).send({ error: "comment is Required" });
            case !rating:
                return res.status(500).send({ error: "rating is Required" });
        }

        const FEEDBACK = {
            donor_id,
            recipient_id,
            donor_username,
            recipient_username,
            comment,
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


