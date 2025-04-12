const blogModel = require("../Models/blog.model")


module.exports.blog = async ()=>{
    const  {image, title, content} = req.body
    const userID = req.user._id 

    try{
    const blog = blogModel.create(
        {
            image,
            title,
            content,
            author: userID
        }
    )
    res.status(201).json({
        message: "Blog created successfully",
        blog
    });   
    }
    catch(error){
        console.error("Error creating blog:", error);
        res.status(500).json({
            message: "Something went wrong",
            error: error.message
        });
    }
}