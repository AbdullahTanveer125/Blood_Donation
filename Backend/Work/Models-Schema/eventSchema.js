const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter Event's Name!"],
        trim: true,
    },
    organization_name: {
        type: String,
        required: [true, "Please enter organization name!"],
        trim: true,
    },
    date: {
        type: String,
        required: [true, "Please enter Event's date!"],
    },
    time: {
        type: String,
        required: [true, "Please enter Event's time!"],
    },
    location: {
        type: String,
        required: [true, "Please enter Event's location!"],
        trim: true,
    },
    city: {
        type: String,
        required: [true, "Please enter your Event's city!"],
        trim: true,
    },
    phone: {
        type: Number,
        required: [true, "Please enter your phone Number!"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Please enter description!"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        unique: true,
        trim:true
    },
    photo: {
        data: Buffer,
        contentType: String,
    }
},
    { timestamps: true }
);









module.exports = mongoose.model("event", eventSchema);




