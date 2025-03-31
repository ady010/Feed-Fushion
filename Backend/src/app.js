const express = require("express")
const app = express()
const Routes = require("../src/Routes/index.routes")
const cors = require("cors")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors({origin:"http://localhost:5173"},{Credantial:true}))

app.use("/",Routes)

module.exports = app