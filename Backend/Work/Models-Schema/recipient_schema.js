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
        age: {
            type: Number,
            required: [true, "Please enter your Age!"],
            trim: true
        },

    },
    { timestamps: true }
);

module.exports = mongoose.model("Recipient", recipientSchema);
