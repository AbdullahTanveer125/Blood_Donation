const mongoose = require("mongoose");

const recipientSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        gender: {
            type: String,
            required: [true, "Please enter your gender!"],
        },
        address: {
            type: String,
            required: [true, "Please enter your address!"],
            trim: true
        },
        age: {
            type: Number,
            required: [true, "Please enter your Age!"],
            trim: true
        },
        person: { 
            type: String, 
            default: "recipient" 
        },

    },
    { timestamps: true }
);

module.exports = mongoose.model("Recipient", recipientSchema);
