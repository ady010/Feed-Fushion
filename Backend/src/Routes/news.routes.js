const express = require("express")
const newsRouter = express.Router()
const newsController = require("../Controller/news.controller")

newsRouter.get("/api", newsController.news)

module.exports = newsRouter