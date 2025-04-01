const express = require("express")
const Router = express.Router()
const userController = require("../Controller/user.controller")
const Middleware = require("../Middleware/user.middleware")

Router.post("/register", 
    Middleware.registerUserValidation,
    userController.register)

module.exports = Router