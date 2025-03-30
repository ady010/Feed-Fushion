const mongoose = require("mongoose")
require("dotenv").config    

const connect = ()=>{mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("Connected to Database");
    })
    .catch(()=>{
        console.log("Failed to connect database");
    })
}

module.exports = connect