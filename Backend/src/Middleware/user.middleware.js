const jwt = require("jsonwebtoken")
const userModel = require("../Models/user.model")


module.exprts.authUser = ()=>{
    try {
        const token = req.headers.authorization.split(" ")[1]
        if(!token){
            res.status(400).json({message:'Unauthorized'})
        }
        
    }
    catch(err){

    }
}