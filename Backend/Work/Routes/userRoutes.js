const express=require("express")

//router object
const user_router=express.Router();








const {
    testController,
    get_user,
    get_friends,
    follow_to_user,
    unfollow_to_user
}=require("../Controllers/userController")










// test || GET 
user_router.get("/user-test", testController);

// // get user
user_router.get("/get-user/:user_id",  get_user);

//get friends
user_router.get("/friends/:userId", get_friends);


// //follow a other user
user_router.put("/:id/follow", follow_to_user);



// //unfollow a user
user_router.put("/:id/unfollow", unfollow_to_user)





module.exports=user_router;