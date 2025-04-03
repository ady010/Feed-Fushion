const app = require("./src/app")
require("dotenv").config()

const database = require("./src/Database/database")
database()

app.listen(3000, ()=>{
    console.log("Server Running");
})