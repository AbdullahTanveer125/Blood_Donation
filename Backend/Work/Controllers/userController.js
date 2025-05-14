const user_model = require("../Models-Schema/user_schema")


async function testController(req, res) {
    res.send({
        message: "We are in << User >> test function !!"
    })
}




// // get user
const get_user = async (req, res) => {
    try {
        const user = await user_model.findById(req.params.user_id).select('-profile_photo -password');

        
        console.log(".......................")
        console.log(".......................")
        console.log(".......................")
        console.log("We are in get_user")
        console.log(".......................")
        console.log(".......................")
        console.log(".......................")

        res.status(200).send({
            success: true,
            message: "get User!",
            user
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error while getting User",
            error,
        });
    }
};


// // get all user
const get_all_user = async (req, res) => {
    try {
        const Users = await user_model.find({}).sort({ createdAt: -1 });

        // Modify Users to encode images as Base64
        const All_Users = Users.map(event => {
            if (event.profile_photo && event.profile_photo.data) {
                return {
                    ...event._doc, // Spread existing event fields
                    profile_photo: `data:${event.profile_photo.contentType};base64,${event.profile_photo.data.toString("base64")}`
                };
            }
            return event;
        });

        console.log("KKKKKKKKK")
        res.status(200).send({
            success: true,
            message: "get All Users",
            Total_users:All_Users.length,
            All_Users,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Erorr in getting All_Users",
            error: error,
        });
    }
};




const get_friends = async (req, res) => {
    try {
        const user = await user_model.findById(req.params.userId);


        // Log the user and friends field to debug
        console.log("User:", user);
        console.log("Friends:", user?.friends);

        if (!user || !user.friends || !Array.isArray(user.friends)) {
            return res.status(404).json({ message: "User or friends not found." });
        }


        const friends = await Promise.all(
            user.friends.map((friendId) => {
                return user_model.findById(friendId);
            })
        );
        let friendList = [];
        friends.map((friend) => {
            const { _id, username, profile_photo } = friend;
            friendList.push({ _id, username, profile_photo });
        });
        res.status(200).json(friendList)
    } catch (err) {
        res.status(500).json(err);
    }
}


// //follow a user
// // mery khayal sy "req.params.id" mey friend ki id dy gy
// // or "req.body.userId" mey currentUser (login user) ki id dy gy

// // followers (mtlb jo aap ko follow kry)
// // followings (mtlb jisy hm follow kry)
const follow_to_user = async (req, res) => {
    if (req.params.login_user_id !== req.params.friend_id) {
        try {
            const friend_user = await user_model.findById(req.params.friend_id);
            const currentUser = await user_model.findById(req.params.login_user_id);
            if (!friend_user.friends.includes(req.params.login_user_id)) {
                await friend_user.updateOne({ $push: { followers: req.params.login_user_id } });
                await currentUser.updateOne({ $push: { followings: req.params.friend_id } });
                await friend_user.updateOne({ $push: { friends: req.params.login_user_id } });
                await currentUser.updateOne({ $push: { friends: req.params.friend_id } });
                res.status(200).json("user has been followed and also add in friends array");
            } else {
                res.status(403).json("you allready follow this user means you are friends!");
            }
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("you cannot follow yourself");
    }
}


// //unfollow a user
const unfollow_to_user = async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await user_model.findById(req.params.id);
            const currentUser = await user_model.findById(req.body.userId);
            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({ $pull: { followers: req.body.userId } });
                await currentUser.updateOne({ $pull: { followings: req.params.id } });
                res.status(200).json("user has been unfollowed");
            } else {
                res.status(403).json("you dont follow this user");
            }
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("you cant unfollow yourself");
    }
};


// add our_feedback in user or update user
const add_our_feedback = async (req, res) => {
    try {
        const { user_id } = req.params;
        const { our_feedback } = req.body;

        // Validate input
        if (!our_feedback) {
            return res.status(400).json({ message: "Feedback is required" });
        }

        // Find user and update feedback
        const updatedUser = await user_model.findByIdAndUpdate(
            user_id,
            { $set: { our_feedback } },
            { new: true, runValidators: true } // Return updated document
        );

        // console.log("Add our_feedback << username >> =", updatedUser.username)
        // console.log("Add our_feedback << person >> =", updatedUser.person)
        // console.log("Add our_feedback << our_feedback >> =", updatedUser.our_feedback)
        // console.log("Add our_feedback << image >> =", updatedUser.profile_photo)

        if (!updatedUser) {
            return res.status(404).send({
                success: false,
                message: "issue in add our_feedback because User not found"
            });
        }

        // Modify events to encode images as Base64
        // Copy send_user object
        const USER = updatedUser;

        // Check if profile_photo exists and has data
        if (updatedUser.profile_photo && updatedUser.profile_photo.data) {
            USER.profile_photo = `data:${updatedUser.profile_photo.contentType};base64,${updatedUser.profile_photo.data.toString("base64")}`;
        }

        // console.log("USER << username >> =", USER.username)
        // console.log("USER << person >> =", USER.person)
        // console.log("USER << our_feedback >> =", USER.our_feedback)
        // console.log("USER << image >> =", USER.profile_photo)


        res.status(200).send({
            success: true,
            message: "Successfully! updating our_feedback in User:",
            // user: updatedUser
        });

    } catch (error) {
        console.error("Error in updating our_feedback:", error);
        res.status(500).send({
            success: false,
            message: "Error in updating our_feedback:",
            error,
        });

    }
};


// get_our_feedback_user
const get_our_feedback_user = async (req, res) => {
    try {
        const users_with_our_feedback = await user_model.find({
            our_feedback: { $exists: true, $ne: null, $nin: [''] }
        }).select('username person our_feedback profile_photo').sort({ createdAt: -1 });

        console.log("users_with_our_feedback=", users_with_our_feedback)

        // Modify events to encode images as Base64
        const All_our_feedbacks = users_with_our_feedback.map(event => {
            if (event.profile_photo && event.profile_photo.data) {
                return {
                    ...event._doc, // Spread existing event fields
                    profile_photo: `data:${event.profile_photo.contentType};base64,${event.profile_photo.data.toString("base64")}`
                };
            }
            return event;
        });



        res.status(200).send({
            success: true,
            message: "get ALL our_feedbacks",
            All_our_feedbacks,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Erorr in getting All_our_feedbacks",
            error: error,
        });
    }
};






//export All functions from "Controller"
module.exports = {
    testController, get_user, get_friends, follow_to_user, unfollow_to_user, add_our_feedback, get_our_feedback_user, get_all_user
}
