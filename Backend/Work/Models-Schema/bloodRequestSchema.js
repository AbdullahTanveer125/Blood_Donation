const mongoose = require("mongoose");

const bloodRequestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your Name!"],
        trim:true//extra spaces remove if before and after the string have extra spaces
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        unique: true,
        trim:true
    },
    phone: {
        type: Number,
        required: [true, "Please enter your phone number!"],
        unique: true,
        trim:true
    },
    blood_group: {
        type: String,
        required: [true, "Please enter your Blood Group!"],
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], // Valid blood groups
    },    
    address: {
        type: String,
        required: [true, "Please enter your Address!"],
        trim:true
    },
    city: {
        type: String,
        required: [true, "Please enter your City!"],
        trim:true
    },
    comment: {
        type: String,
        required: [true, "Please enter your Comment!"],
        trim:true
    },
    priority: {
        type: String,
        required: [true, "Please enter your Priority!"],
        default: 'Normal', // Default priority is 'Normal'
        enum: ['Normal', 'Urgent'], // Valid priority levels
    },
    status: {
        type: String,
        default: 'Pending', // Default status is 'Pending'
        enum: ['Pending', 'Completed'], // Valid statuses
    },
    blood_need_date: {
        type: String,
        required: [true, "Please enter Date!"],
    },
},
    { timestamps: true }
);









module.exports = mongoose.model("bloodRequest", bloodRequestSchema);




