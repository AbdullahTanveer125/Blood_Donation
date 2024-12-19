const express=require("express")

//router object
const organization_router=express.Router();

const express_formidable=require("express-formidable")








const {
    testController,
    organization_signUp,
    organization_login
}=require("../Controllers/organizationController")










// test || GET 
organization_router.get("/organization-test", testController);

// organization sign-up
organization_router.post("/organization-signup", express_formidable(), organization_signUp);

// Login organization
organization_router.post("/organization-login",  organization_login);









module.exports=organization_router;