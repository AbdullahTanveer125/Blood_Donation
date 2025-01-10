const express=require("express")

//router object
const recipient_router=express.Router();

const express_formidable=require("express-formidable")








const {
    testController,
    recipient_signUp,
    recipient_login,
    get_recipient
}=require("../Controllers/recipientController")










// test || GET 
recipient_router.get("/recipient-test", testController);

// recipient sign-up
recipient_router.post("/recipient-signup", express_formidable(), recipient_signUp);

// Login recipient
recipient_router.post("/recipient-login", recipient_login);

// get recipient
recipient_router.get("/get-recipient/:recipient_id", get_recipient);








module.exports=recipient_router;