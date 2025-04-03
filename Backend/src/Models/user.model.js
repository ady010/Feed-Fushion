const mongoose = require('mongoose')
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

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

module.exports = userSchema.statics.verifyToken = function(token){
    return jwt.verify(token, process.env.JWT_SECRET)
}

module.exports =userSchema.statics.hashPassword = function(password){
    return bcrypt.hash(password,10)
}

module.exports =userSchema.statics.comparePassword = function(password, hash){
    return bcrypt.compare(password, hash)
}

const userModel = mongoose.model("user", userSchema)

module.exports = userModel