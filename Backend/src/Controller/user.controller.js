const userModel = require("../Models/user.model")
const { validationResult } = require("express-validator")
const middleware = require("../Middleware/user.middleware")
const userService = require("../services/user.service")


module.exports.register = async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ message: errors })
    }

    try {
        const { name, email, password } = req.body

        const token = userModel.generateToken()
        res.status(200).json({message: token, user })
    }
    catch (err) {
        res.status(400).json({ message: { Error } })
    }
}

module.exports.login = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = userModel.findOne({ email })
        if (!user) {
            res.status(400).json({ message: "Invalid user" })
        }
        const isMatch = await userModel.comparePassword(password, user.password)
        if(!isMatch){
            res.status(400).json({message: "Invalis user"})
        }

        const token = userModel.generateToken()

        res.status(200).json({message: token, user})
    }
    catch (err) {
        res.status(400).json({message: "Error",err})
    }
}