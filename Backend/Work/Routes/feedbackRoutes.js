const express=require("express")

//router object
const feedback_router=express.Router();







const {
    testController,
    add_feedback,
    get_all_feedbacks_of_donor,
    get_all_feedbacks_of_recipient,
    get_single_feedback,
    delete_feedback,
    delete_all_feedbacks
}=require("../Controllers/feedbackController")










// test || GET 
feedback_router.get("/feedback-test", testController);

// Add feedback
feedback_router.post("/add/:donor_id/:recipient_id",  add_feedback);

// get all_feedbacks from donor_id 
feedback_router.get("/get-all-donor-feedbacks/:donor_id", get_all_feedbacks_of_donor);


// get all_feedbacks from recipient_id
feedback_router.get("/get-all-recipient-feedbacks/:recipient_id", get_all_feedbacks_of_recipient);


// get single feedback
feedback_router.get("/get-single-feedback/:feedback_id", get_single_feedback);

// // delete feedback
feedback_router.delete("/delete-single-feedback/:feedback_id", delete_feedback);

// // delete all feedbacks
feedback_router.delete("/delete-all-feedbacks", delete_all_feedbacks);





module.exports=feedback_router;