const express=require("express")

//router object
const donor_router=express.Router();

const express_formidable=require("express-formidable")








const {
    testController,
    donor_signUp,
    donor_login,
    get_donor,
    get_all_donor,
    change_availability,
    delete_account
}=require("../Controllers/donorController")










// test || GET 
donor_router.get("/donor-test", testController);

// donor sign-up
donor_router.post("/signup", express_formidable(), donor_signUp);

// // Login donor
donor_router.post("/login",  donor_login);

// // get donor
donor_router.get("/get-donor/:user_id",  get_donor);

// // get all donor
donor_router.get("/get-all-donor",  get_all_donor);

// change Availability
donor_router.post("/availability/:donor_id",  change_availability);

// delete donor
donor_router.delete("/delete-donor/:donor_id",  delete_account);







module.exports=donor_router;