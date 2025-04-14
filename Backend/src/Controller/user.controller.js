const userModel = require("../Models/user.model")
const { validationResult } = require("express-validator")
const userService = require("../services/user.service")



module.exports.createUserController = async (req, res) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: "error" })
    }

    try {
        const { name, email, password } = req.body

        const user = await userService.createUser(name, email, password)

        const token = user.generateToken()
        return res.status(201).json({user, token })
    }
    
    catch (error) {
        console.log(error);
        return res.status(500).json({message:error.message});
    }
}

module.exports.loginUserController = async (req, res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array() })
    }

    try {
        const { email, password } = req.body
        const user = await userService.loginUserController({email, password})

        const token = user.generateToken()


        res.status(200).json({user, token})
    }
    catch (err) {
        console.log(err);
        
        res.status(400).json({message:err.message})
    }
}