const express = require("express")
const Blogrouter = express.Router()
const Middleware = require("../Middleware/user.middleware")

Router.post("/blog",
    Middleware.authUser,
    blogController.blog
)


module.exports = Blogrouter