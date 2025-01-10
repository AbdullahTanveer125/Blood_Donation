const message_router = require("express").Router();
const message_model = require("../Models-Schema/messageSchema");

//add new message

message_router.post("/message", async (req, res) => {
  const newMessage = new message_model(req.body);

  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
    console.log("AAAAAAAAAA")
  } catch (err) {
    res.status(500).json(err);
  }
});

//get message

message_router.get("/message/:conversationId", async (req, res) => {
  try {
    const messages = await message_model.find({
      conversationId: req.params.conversationId,
    });
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = message_router;