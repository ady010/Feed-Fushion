const blogModel = require("../Models/blog.model");

module.exports.createBlog = async ({image, title, content})=>{
    if(!image || !title|| !content){
        throw new Error("All fields are required");
    }
    const user = await blogModel.findOne()
    if(!user){
        throw new Error("Please Login");
    }
}