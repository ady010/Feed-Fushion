const express = require("express")
const Router = express.Router()
const userController = require("../Controller/user.controller")
const blogController = require("../Controller/blog.controller")
const Middleware = require("../Middleware/user.middleware")

Router.post("/register", 
    Middleware.registerUserValidation,
    userController.createUserController)

Router.post("/login",
    Middleware.loginUserValidation,
    userController.loginUserController)


    
module.exports = Router