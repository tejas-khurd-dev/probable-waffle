const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email:{
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true,
        match: [/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, "Invalid email address"]
    },
    name: {
        type: String,
        required: [true, "Display name must be entered"]
    },
    username: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^[A-Za-z0-9_]+$/]
    },
    password: {
        trim: true,
        type: String,
        required: true,
        minlength: 6,
        select: false
    }
}, {
    timestamps: true
})

const userModel = mongoose.model("user", userSchema);

module.exports = userModel