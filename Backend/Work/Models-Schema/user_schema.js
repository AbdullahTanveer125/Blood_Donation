const mongoose = require("mongoose");


// see comment in below

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter your first name!"],
            trim: true//extra spaces remove if before and after the string have extra spaces
        },
        username: {
            type: String,
            required: [true, "Please enter your username!"],
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: [true, "Please enter your email!"],
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: [true, "Please enter your password!"],
            trim: true
        },
        role: {
            type: String,
            enum: ["donor", "recipient", "organization"],
        },
        phone: {
            type: Number,
            required: [true, "Please enter your phone number!"],
            unique: true,
            trim: true
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        friends: {
            type: Array,
            default: [],
        },
        followers: {// jo hmy follow kry
          type: Array,
          default: [],
        },
        followings: {// jisy hm follow kry
          type: Array,
          default: [],
        },
        person: { 
            type: String, 
            required: [true, "person value is require to sign-up"],
        },
        profile_photo: {//is ki detail nichy di hai
            data: Buffer,
            contentType: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);




// jb hm kisi field pr unique wala attribute ko apply krty hai to Mongodb mey us collection k undr "Indexes" mey fields show hoti hai lykin Mongodb us field k aagy "_1" ya "kuch or" lga leta hai. is k zarort tb aaa skti hai jb duplication ka error aaa jata hai