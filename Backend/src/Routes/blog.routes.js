const express = require("express")
const Blogrouter = express.Router()
const Middleware = require("../Middleware/user.middleware")
const blogController = require("../Controller/blog.controller")
const blogMiddleware = require("../Middleware/blog.middleware")

Blogrouter.post("/create",
    Middleware.authUser,
    blogMiddleware.blogValidation,
    blogController.blog
)


module.exports = Blogrouter