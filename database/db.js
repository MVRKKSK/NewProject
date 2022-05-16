const mongoose = require("mongoose")

require('dotenv').config({ path: 'config.env' });

async function connectdb(){

    try{
        await mongoose.connect(process.env.MONGO_URI , {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        })
        console.log("database connected successfully")
    }
    catch(err){
        console.log(err)
    }
}

module.exports = connectdb