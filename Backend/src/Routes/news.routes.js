const express = require("express")
const newsRouter = express.Router()
const newsController = require("../Controller/news.controller")

newsRouter.post("/addnews", newsController.news)

module.exports = newsRouter