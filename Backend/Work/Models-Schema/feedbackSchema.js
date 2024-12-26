const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema({
    recipient_name: {
        type: String,
        required: [true, "Please enter Recipient's Name!"],
        trim: true,
    },
    comment: {
        type: String,
        required: [true, "Please enter Comment!"],
        trim: true,
    },
    rating: {
        type: Number,
        required: [true, "Please enter Rating!"],
    },
},
    { timestamps: true }
);









module.exports = mongoose.model("feedback", feedbackSchema);




