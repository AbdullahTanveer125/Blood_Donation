const mongoose = require("mongoose");

const donorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your first name!"],
        trim:true//extra spaces remove if before and after the string have extra spaces
    },
    username: {
        type: String,
        required: [true, "Please enter your user name!"],
        unique: true,
        trim:true
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
        unique: true,
        trim:true
    },
    password: {
        type: String,
        required: [true, "Please enter your password!"],
        trim:true
    },
    gender: {
        type: String,
        required: [true, "Please enter your gender!"],
    },
    age: {
        type: Number,
        required: [true, "Please enter your Age!"],
        trim:true
    },
    weight: {
        type: Number,
        required: [true, "Please enter your Weight!"],
        trim:true
    },
    blood_group: {
        type: String,
        required: [true, "Please enter your Blood Group!"],
    },
    phone: {
        type: Number,
        required: [true, "Please enter your phone number!"],
        unique: true,
        trim:true
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
    last_time_donation_date: {
        type: String,
        required: [true, "Please enter your Last Time Donation Date!"],
    },
    photo: {//is ki detail nichy di hai
        data: Buffer,
        contentType: String,
    },
},
    { timestamps: true }
);









module.exports = mongoose.model("Donor", donorSchema);





//*********************** (waisy kisi sy pooch lena) ***********************
// photo: This is the name of the field in your Mongoose schema.

// Inside the photo field, you have two subfields:

// data: Buffer: The data subfield is of type Buffer. In Mongoose, Buffer is used to store binary data, such as images, audio, or any other binary content. It's typically used to store the actual binary image data.

// contentType: String: The contentType subfield is of type String. It is used to store the MIME type or content type of the binary data. For images, this field might store values like "image/jpeg," "image/png," or "image/gif," indicating the format of the image.

// This code is often used to store images as binary data in a Mongoose schema. The data field stores the binary image data itself, and the contentType field stores the type of the image data, which can be helpful for serving and rendering images correctly when you retrieve them from the database.

