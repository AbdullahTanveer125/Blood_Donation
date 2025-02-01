const mongoose = require("mongoose");

const event_Schema = new mongoose.Schema({
    organization_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Organization",
        required: true
    },
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
    phone: {// event ko manage krny waly ka number
        type: Number,
        required: [true, "Please enter your phone Number!"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Please enter description!"],
        trim: true,
    },
    organization_photo: {
        data: Buffer,
        contentType: String,
    },
},
    { timestamps: true }
);









module.exports = mongoose.model("event", event_Schema);




