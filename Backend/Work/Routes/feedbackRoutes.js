const express=require("express")

//router object
const feedback_router=express.Router();







const {
    testController,
    add_feedback,
    get_all_feedbacks,
    get_single_feedback,
    delete_feedback,
    delete_all_feedbacks
}=require("../Controllers/feedbackController")










// test || GET 
feedback_router.get("/feedback-test", testController);

// Add feedback
feedback_router.post("/add-feedback",  add_feedback);

// get all_feedback
feedback_router.get("/get-all-feedback", get_all_feedbacks);

// // // get single feedback
feedback_router.get("/get-feedback/:feedback_id", get_single_feedback);

// // // delete feedback
feedback_router.delete("/delete-feedback/:feedback_id", delete_feedback);

// // delete all feedbacks
feedback_router.delete("/delete-all-feedbacks", delete_all_feedbacks);





module.exports=feedback_router;