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
    if (req.body.userId !== req.params.id) {
        try {
            const user = await user_model.findById(req.params.id);
            const currentUser = await user_model.findById(req.body.userId);
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: { followers: req.body.userId } });
                await currentUser.updateOne({ $push: { followings: req.params.id } });
                await user.updateOne({ $push: { friends: req.body.userId } });
                await currentUser.updateOne({ $push: { friends: req.params.id } });
                res.status(200).json("user has been followed");
            } else {
                res.status(403).json("you allready follow this user");
            }
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("you cant follow yourself");
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






//export All functions from "Controller"
module.exports = {
    testController, get_user, get_friends, follow_to_user, unfollow_to_user
}
