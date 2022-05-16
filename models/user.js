const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name : {
        type: String , 
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username : {
        type: String , 
        required: true,
        unique: true
    },
    password: {
        type: String , 
        required: true
    },
    profilepic: {
        type: String
    },
    newmessage:{
        type: Boolean,
        default: true
    },
    unreadmessages: {
        type: Boolean,
        default: false
    },
    unreadnotifications: {
        type: Boolean,
        default: false
    },
    role:{
        type: String,
        default: "user",
        enum: ["user" , "root"]
    },
    resetToken:{
        type: String
    },
    expireToken:{
        type: Date
    }
} , {timestamps: true})

module.exports = mongoose.model("User" , userSchema)

