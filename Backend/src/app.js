const express = require("express")
const app = express()
const Routes = require("./Routes/user.routes")
const cors = require("cors")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors({origin:"http://localhost:5173"},{Credantial:true}))

app.use("/users",Routes)

module.exports = app;