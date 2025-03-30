const express = require("express")
const Router = express.Router()
const userController = require("../Controller/user.controller")

Router.post("/register", userController.register)

module.exports = Router