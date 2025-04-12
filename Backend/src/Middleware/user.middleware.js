const jwt = require("jsonwebtoken")
const userModel = require("../Models/user.model")
const {body} = require("express-validator")


module.exports.registerUserValidation = [
    body("name")
    .isString(),
    body('email')
    .isEmail()
    .withMessage('Email must be a valid email'),
    body('password')
    .isString()
    .withMessage('Password must be a String')
    .isLength({min: 6})
    .withMessage('Password must be atleast 6 characters')
]

module.exports.loginUserValidation = [
    body('email')
    .isEmail()
    .withMessage('Email must be a valid email'),
    body('password')
    .isString()
    .withMessage('Password must be a String')
    .isLength({min: 6})
    .withMessage('Password must be atleast 6 characters')
]

module.exports.authUser = async (req, res, next)=>{
    try {
        const token = req.headers.authorization.split(" ")[1]
        if(!token){
            res.status(400).json({message:'Unauthorized'})
        }
        const decoded = userModel.verifyToken(token)
        const user = await userModel.findOne({_id: decoded.id}).lean()

        req.user = user

        next()

    }
    catch(err){
        res.status(400).json({message:'Unathorized'})
    }
} 
