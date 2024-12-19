const express=require("express")

//router object
const recipient_router=express.Router();

const express_formidable=require("express-formidable")








const {
    testController,
    recipient_signUp,
    recipient_login
}=require("../Controllers/recipientController")










// test || GET 
recipient_router.get("/recipient-test", testController);

// recipient sign-up
recipient_router.post("/recipient-signup", express_formidable(), recipient_signUp);

// Login recipient
recipient_router.post("/recipient-login",  recipient_login);









module.exports=recipient_router;