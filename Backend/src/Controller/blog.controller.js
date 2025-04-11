const blogModel = require("../Models/blog.model")

module.exports.blog = async ()=>{
    const  {name, title, content} = req.body

    const blog = blogModel.create(
        {
            name,
            title,
            content
        }
    )
    
}