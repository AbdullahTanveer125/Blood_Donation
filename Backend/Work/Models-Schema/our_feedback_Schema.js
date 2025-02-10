const mongoose = require("mongoose");

const our_feedback_Schema = new mongoose.Schema({
    // user_id: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    //     required: true
    // },
    user_id: {
        type: String,
        required: [true, "Please add user_id"],
    },    
    username: {
        type: String,
    },
    person: {
        type: String,
        required: [true, "Please add person!"],
    },
    comment: {
        type: String,
        required: [true, "Please enter Comment!"],
        trim: true,
    },
    user_photo: {
        data: Buffer,
        contentType: String,
    },
},
    { timestamps: true }
);









module.exports = mongoose.model("our_feedback", our_feedback_Schema);




