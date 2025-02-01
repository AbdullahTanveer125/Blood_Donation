const mongoose = require("mongoose");

const organizationSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        website_url: {
            type: String,
            required: [true, "Please enter your Website Link!"],
            unique: true,
            trim: true//extra spaces remove if before and after the string have extra spaces
        },
        location: {
            type: String,
            required: [true, "Please enter your Address!"],
            trim: true
        },
        // noc_photo: {//is ki detail nichy di hai
        //     data: Buffer,
        //     contentType: String,
        // },
        person: { 
            type: String, 
            default: "organization" 
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Organization", organizationSchema);
