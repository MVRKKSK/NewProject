const mongoose = require("mongoose")

const followersModel = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    followers: [{
        user: {type: mongoose.Schema.Types.ObjectId , ref: "User"}
        }
    ],

    following: [{
        user: {type: mongoose.Schema.Types.ObjectId , ref: "User"}
        }
    ],
})

module.exports = mongoose.model("followers" , followersModel)