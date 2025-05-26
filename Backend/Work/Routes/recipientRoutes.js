const express = require("express")

//router object
const recipient_router = express.Router();

const express_formidable = require("express-formidable")








const {
    testController,
    recipient_signUp,
    recipient_login,
    get_recipient,
    delete_account,
    // follow_to_user,
    // get_friends,
    // unfollow_to_user
} = require("../Controllers/recipientController")










// // test || GET 
recipient_router.get("/recipient-test", testController);

// // recipient sign-up
recipient_router.post("/signup", express_formidable(), recipient_signUp);

// // Login recipient
recipient_router.post("/login", recipient_login);

// // get recipient
recipient_router.get("/get-recipient/:recipient_id", get_recipient);

// delete recipient
recipient_router.delete("/delete-recipient/:recipient_id",  delete_account);

// //follow a other user
// recipient_router.put("/:id/follow", follow_to_user);


// //get friends
// recipient_router.get("/friends/:userId", get_friends);



// //unfollow a user
// recipient_router.put("/:id/unfollow", unfollow_to_user)





module.exports = recipient_router;