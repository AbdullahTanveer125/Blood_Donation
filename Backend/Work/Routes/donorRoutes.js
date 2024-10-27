const express=require("express")

//router object
const donor_router=express.Router();

const express_formidable=require("express-formidable")








const {
    testController,
    donor_signUp,
    donor_login
}=require("../Controllers/donorController")










// test || GET 
donor_router.get("/test", testController);

// donor sign-up
donor_router.post("/signup", express_formidable(), donor_signUp);

// Login donor
donor_router.post("/login",  donor_login);









module.exports=donor_router;