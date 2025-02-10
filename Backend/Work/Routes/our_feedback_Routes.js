const express=require("express")

//router object
const our_feedback_router=express.Router();


const express_formidable=require("express-formidable")





const {
    testController,
    add_our_feedback,
    get_all_our_feedback,
    get_specific_our_feedback,
    // get_single_our_feedback,
    // delete_our_feedback,
    // delete_all_our_feedback
}=require("../Controllers/our_feedback_Controller")










// test || GET 
our_feedback_router.get("/test", testController);

// Add our_feedback
our_feedback_router.post("/add-new", express_formidable(), add_our_feedback);

// get our_feedback of specific / particular organization
// our_feedback_router.get("/get-specific-event/:user_id", get_specific_our_feedback);

// get all_our_feedback
our_feedback_router.get("/get-all", get_all_our_feedback);




// // get single our_feedback
// our_feedback_router.get("/get-single-event/:event_id", get_single_our_feedback);

// // delete our_feedback
// our_feedback_router.delete("/delete-single-event/:event_id", delete_our_feedback);

// delete all our_feedback
// our_feedback_router.delete("/delete-all-events", delete_all_our_feedback);





module.exports=our_feedback_router;