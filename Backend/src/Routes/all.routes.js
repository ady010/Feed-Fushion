const express = require("express")
const allRoutes = express.Router()
const sportsController = require("../Controller/sports.controller")
const businessController = require("../Controller/business.controller")
const techController =require("../Controller/tech.controller")
const scienceController = require("../Controller/science.controller")

allRoutes.get("/sports",sportsController.sports)
allRoutes.get("/business",businessController.business)
allRoutes.get("/tech",techController.tech)
allRoutes.get("/science",scienceController.science)


module.exports = allRoutes