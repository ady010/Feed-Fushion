const express = require("express")
const allRoutes = express.Router()
const sportsController = require("../Controller/sports.controller")

allRoutes.get("/sports",sportsController.sports)


module.exports = allRoutes