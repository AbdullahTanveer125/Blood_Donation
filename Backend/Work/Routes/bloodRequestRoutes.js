const express=require("express")

//router object
const bloodRequest_router=express.Router();







const {
    testController,
    add_bloodRequest,
    get_all_blood_request,
    get_Single_blood_request,
    delete_blood_request,
    delete_all_blood_requests
}=require("../Controllers/bloodRequestController")










// test || GET 
bloodRequest_router.get("/bloodRequest-test", testController);

// Add bloodRequest
bloodRequest_router.post("/add-bloodRequest",  add_bloodRequest);

// get all_blood_request
bloodRequest_router.get("/get-all-blood-request", get_all_blood_request);

// get single blood Request
bloodRequest_router.get("/get-blood-request/:blood_request_id", get_Single_blood_request);

// delete Blood Request
bloodRequest_router.delete("/delete-blood-request/:blood_request_id", delete_blood_request);

// delete All Blood Requests
bloodRequest_router.delete("/delete-all-blood-requests", delete_all_blood_requests);



module.exports=bloodRequest_router;