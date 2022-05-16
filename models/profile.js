const mongoose = require("mongoose")

const profileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    bio: {
        type: String
    },

    sociallinks: {
        instagram: {
            type:String
        },
        facebook: {
            type:String
        },
        youtube: {
            type:String
        },
        twitter: {
            type:String
        }
    }
}, {timestamps: true})

module.exports = mongoose.model("Profile" , profileSchema)