const mongoose = require("mongoose");

// see comment in below


const donorSchema = new mongoose.Schema(
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
        weight: {
            type: Number,
            required: [true, "Please enter your Weight!"],
            trim: true
        },
        blood_group: {
            type: String,
            required: [true, "Please enter your Blood Group!"],
        },
        address: {
            type: String,
            required: [true, "Please enter your Address!"],
            trim: true
        },
        nearest_hospital: {
            type: String,
            required: [true, "Please enter your City!"],
            trim: true
        },
        last_time_donation_date: {
            type: String, 
            default: null 
        },
        availability: { 
            type: Boolean, 
            default: true 
        },
        rating: {
            type: Number,
        },
        person: { 
            type: String, 
            default: "donor" 
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Donor", donorSchema);



// jb hm kisi field pr unique wala attribute ko apply krty hai to Mongodb mey us collection k undr "Indexes" mey fields show hoti hai lykin Mongodb us field k aagy "_1" ya "kuch or" lga leta hai. is k zarort tb aaa skti hai jb duplication ka error aaa jata hai