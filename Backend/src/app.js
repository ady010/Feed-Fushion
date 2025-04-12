const express = require("express")
const app = express()
const Routes = require("./Routes/user.routes")
const blogRoutes = require("./Routes/blog.routes")
const cors = require("cors")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors({origin:"http://localhost:5173"},{Credantial:true}))

app.use("/users",Routes)
app.use("/blog",blogRoutes)

module.exports = app;