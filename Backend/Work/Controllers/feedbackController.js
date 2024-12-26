const feedback_model = require("../Models-Schema/feedbackSchema")

const JWT = require("jsonwebtoken");






async function testController(req, res) {
    res.send({
        message: "We are in << Feedback >> test function !!"
    })
}


const add_feedback = async (req, res) => {
    try {
        const { recipient_name, comment, rating } = req.body;

        console.log("***req.body:***", req.body)
        //validation
        switch (true) {
            case !recipient_name:
                return res.status(500).send({ error: "recipient name is Required" });
            case !comment:
                return res.status(500).send({ error: "comment is Required" });
            case !rating:
                return res.status(500).send({ error: "rating is Required" });
        }

        const FEEDBACK = {
            recipient_name,
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


// get-all-feedbacks
const get_all_feedbacks = async (req, res) => {
    try {
        const All_Feedbacks = await feedback_model.find({}).limit(10).sort({ createdAt: -1 });
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
        await feedback_model.findByIdAndDelete(req.params.feedback_id);
        res.status(200).send({
            success: true,
            message: "feedback is Deleted successfully!",
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
module.exports = { testController, add_feedback,get_all_feedbacks, get_single_feedback, delete_feedback, delete_all_feedbacks }


