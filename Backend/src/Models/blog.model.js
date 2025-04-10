const mongoose = require("mongoose")

const blogSchema = new mongoose.Schema(
    {
        name:{
            type:String
        },
        title:{
            type:String
        },
        content:{
            type:String
        }
    }
)

const blogModel = mongoose.model("blog", blogSchema)

module.exports = blogModel