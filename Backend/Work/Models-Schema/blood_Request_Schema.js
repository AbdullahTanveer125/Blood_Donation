const mongoose = require("mongoose");

const bloodRequestSchema = new mongoose.Schema({
    recipient_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Recipient",
        required: true
    },
    patient_name: {
        type: String,
        required: [true, "Please enter your first name!"],
        trim: true//extra spaces remove if before and after the string have extra spaces
    },
    blood_group: {
        type: String,
        required: [true, "Please enter your Blood Group!"],
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], // Valid blood groups
    },
    location: { //add hospital's name
        type: String,
        required: [true, "Please enter your Name!"],
    },
    urgency: {
        type: String,
        required: [true, "Please enter your email!"],
        enum: ['high', 'low']
    },
    phone: {
        type: Number,
        required: [true, "Please enter your phone number!"],
        trim: true
    },
    comment: {
        type: String,
        required: [true, "Please enter your Comment!"],
        trim: true
    },
    blood_need_date: {
        type: String,
        required: [true, "Please enter Date!"],
    },
    // profile_photo: {
    //     data: Buffer,
    //     contentType: String,
    // },
},
    { timestamps: true }
);









module.exports = mongoose.model("blood_request", bloodRequestSchema);




