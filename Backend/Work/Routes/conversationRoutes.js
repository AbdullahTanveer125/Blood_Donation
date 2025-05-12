const conversation_router = require("express").Router();
const conversation_model = require("../Models-Schema/conversation_Schema");

const recipient_model = require("../Models-Schema/recipient_schema");

// //new conversation
// conversation_router.post("/conversation", async (req, res) => {
//     const newConversation = new conversation_model({
//         members: [req.body.senderId, req.body.receiverId],
//     });

//     try {
//         const savedConversation = await newConversation.save();
//         res.status(200).json(savedConversation);
//         console.log("AAAAA")
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

conversation_router.post("/add_donor_conversation", async (req, res) => {
	try {

		console.log("DDDDDDDDDDDDDDDDDDDD")
		console.log("DDDDDDDDDDDDDDDDDDDD")
		console.log("DDDDDDDDDDDDDDDDDDDD")
		console.log("DDDDDDDDDDDDDDDDDDDD")
		console.log("DDDDDDDDDDDDDDDDDDDD")
		const { senderId, recipientId } = req.body;
		// const senderId = req.params.senderId;
		// const recipientId = req.params.recipientId;

		const get = await recipient_model.findById(recipientId).select('userId');
		// const receiverId = get.userId //in object form
		const receiverId = String(get.userId);


		console.log("sender User id=====", senderId) //this is in string form
		console.log("Receive User id=====", receiverId) //this is in object form

		if (!receiverId) {
			return res.status(404).json({ success: false, message: "Recipient not found" });
		}

		// const userId = recipient.userId;

		// Check if a conversation already exists between these users
		const existingConversation = await conversation_model.findOne({
			members: { $all: [senderId, receiverId] } // Check if both users are in the conversation
		});

		if (existingConversation) {
			return res.status(200).send({
				success: true,
				message: "conversation is already exist !",
				existingConversation
			});
		}

		// If no conversation exists, create a new one
		const newConversation = new conversation_model({
			members: [senderId, receiverId],
		});

		const savedConversation = await newConversation.save();
		// res.status(201).json(savedConversation); // 201 means "Created"
		console.log("New conversation created");
		res.status(200).send({
			success: true,
			message: "New conversation created",
			savedConversation
		});

	} catch (err) {
		console.error("Error creating conversation:", err);
		res.status(500).json({ error: "Internal Server Error" });
	}
});


// //get conversation of a user
conversation_router.get("/specific_conversation/:userId", async (req, res) => {
	try {
		const conversation = await conversation_model.find({
			members: { $in: [req.params.userId] },
		});
		res.status(200).json(conversation);
		console.log("AAAAAAA")
	} catch (err) {
		res.status(500).json(err);
	}
});


// // get conversation includes two userId
conversation_router.get("/find/:firstUserId/:secondUserId", async (req, res) => {
	try {
		const conversation = await conversation_model.findOne({
			members: { $all: [req.params.firstUserId, req.params.secondUserId] },
		});
		res.status(200).json(conversation)
	} catch (err) {
		res.status(500).json(err);
	}
});




module.exports = conversation_router;