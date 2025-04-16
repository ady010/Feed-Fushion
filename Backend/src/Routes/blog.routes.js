const express = require("express")
const blogRouter = express.Router()
const Middleware = require("../Middleware/user.middleware")
const blogController = require("../Controller/blog.controller")
const blogMiddleware = require("../Middleware/blog.middleware")

blogRouter.post("/create",
    Middleware.authUser,
    blogMiddleware.blogValidation,
    blogController.blog
)

blogRouter.get("/getBlogs",
    blogController.getBlog
)


module.exports = blogRouter