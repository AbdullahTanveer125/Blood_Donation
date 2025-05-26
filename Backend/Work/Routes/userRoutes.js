const express=require("express")

//router object
const user_router=express.Router();








const {
    testController,
    get_user,
    add_our_feedback,
    get_our_feedback_user,
    get_all_user,
    get_friends,
    follow_to_user,
    unfollow_to_user,
}=require("../Controllers/userController")










// test || GET 
user_router.get("/user-test", testController);


// // get All user
user_router.get("/get-all-user",  get_all_user);

// // get user
user_router.get("/get-user/:user_id",  get_user);

//get friends
user_router.get("/friends/:userId", get_friends);


// //follow a other user and add into friend array
user_router.put("/:login_user_id/:friend_id/follow", follow_to_user);



// //unfollow a user
user_router.put("/:id/unfollow", unfollow_to_user)


// give our_feedback
user_router.put("/add_our_feedback/:user_id", add_our_feedback)


// give our_feedback
user_router.get("/get_our_feedback_user/", get_our_feedback_user)


module.exports=user_router;