const express=require("express")

//router object
const organization_router=express.Router();

const express_formidable=require("express-formidable")








const {
    testController,
    organization_signUp,
    organization_login,
    get_organization,
    get_photo
}=require("../Controllers/organizationController")










// test || GET 
organization_router.get("/organization-test", testController);

// organization sign-up
organization_router.post("/signup", express_formidable(), organization_signUp);

// Login organization
organization_router.post("/login",  organization_login);

// get organization
organization_router.get("/get-organization/:organization_id",  get_organization);


// get organization
organization_router.get("/photo/:user_id",  get_photo);








module.exports=organization_router;