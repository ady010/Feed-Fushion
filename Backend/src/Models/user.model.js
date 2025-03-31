const mongoose = require('mongoose')
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
        
    },
    email:{
        type:String
        
    },
    password:{
        type:String
    }
})

userSchema.methods.generateToken = function(){
    return jwt.sign(
        {
            id: this.id,
            name: this.name,
            email: this.email   
        },
        process.env.JWT_SECRET
    )
}

userSchema.statics.verifyToken = function(token){
    return jwt.verify(token, process.env.JWT_SECRET)
}


const userModel = mongoose.model("user", userSchema)

module.exports = userModel