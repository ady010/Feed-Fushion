const jwt = require("jsonwebtoken")
const userModel = require("../Models/user.model")


module.exprts.authUser = async (req, res, next)=>{
    try {
        const token = req.headers.authorization.split(" ")[1]
        if(!token){
            res.status(400).json({message:'Unauthorized'})
        }
        const decoded = userModel.verifyToken(token)
        const user = await userModel.findOne({_id: decoded.id})

        req.user = user

        next()

    }
    catch(err){
        res.status(400).json({message:'Unathorized'})
    }
} 
