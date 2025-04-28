const express=require("express")

//router object
const bloodRequest_router=express.Router();







const {
    testController,
    add_bloodRequest,
    get_all_blood_request,
    get_specific_blood_request,
    delete_blood_request,
    delete_all_blood_requests,
    search_blood_requests,
    get_donor_blood_request
}=require("../Controllers/blood_Request_Controller")










// test || GET 
bloodRequest_router.get("/test", testController);

// Add bloodRequest
bloodRequest_router.post("/add-new/:recipient_id",  add_bloodRequest);

// // get all_blood_request
bloodRequest_router.get("/get-all-blood-request", get_all_blood_request);

// get blood Request of specific / particular recipient
bloodRequest_router.get("/get-specific-blood-request/:recipient_id", get_specific_blood_request);

// // delete Blood Request
bloodRequest_router.delete("/delete-blood-request/:blood_request_id", delete_blood_request);

// // delete All Blood Requests
bloodRequest_router.delete("/delete-all-blood-requests", delete_all_blood_requests);

// // search Blood Requests
bloodRequest_router.post("/search-blood-requests", search_blood_requests);



// get blood Request of specific / particular donor for history
bloodRequest_router.get("/get-donor-blood-request/:donor_id", get_donor_blood_request);







module.exports=bloodRequest_router;


