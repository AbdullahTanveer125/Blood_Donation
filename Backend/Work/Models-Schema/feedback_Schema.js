const mongoose = require("mongoose");

const feedback_Schema = new mongoose.Schema({
    recipient_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recipient",
        required: true
    },
    donor_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Donor",
        required: true
    },
    recipient_username: {
        type: String,
    },
    donor_username: {
        type: String,
    },
    comment: {
        type: String,
        required: [true, "Please enter Comment!"],
        trim: true,
    },
    rating: {
        type: Number,
        required: [true, "Please enter Rating!"],
        enum: [1, 2, 3, 4, 5]
    },
},
    { timestamps: true }
);









module.exports = mongoose.model("feedback", feedback_Schema);




