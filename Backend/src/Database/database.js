const mongoose = require("mongoose")

const connect = ()=>{mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("Connected to Database");
    })
    .catch(()=>{
        console.log("Failed to connect database");
    })
}

module.exports = connect