const express=require("express")

//router object
const bloodRequest_router=express.Router();







const {
    testController,
    add_bloodRequest
}=require("../Controllers/bloodRequestController")










// test || GET 
bloodRequest_router.get("/bloodRequest-test", testController);

// Add bloodRequest
bloodRequest_router.post("/add-bloodRequest",  add_bloodRequest);









module.exports=bloodRequest_router;