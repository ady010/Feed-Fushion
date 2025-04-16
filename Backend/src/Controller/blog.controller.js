const { validationResult } = require("express-validator");
const blogModel = require("../Models/blog.model");

module.exports.getBlog = async (req, res) => {
    try {
        const blogs = await blogModel
            .find()
            .populate("image title content author");
        return res.status(200).json({ blogs });
    } catch (error) {
        console.error("Error fetching blogs:", error);
        res.status(500).json({ message: "Something went wrong" });
    }
}


module.exports.blog = async (req, res) => {


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    try {
        const { image, title, content } = req.body;
        const userID = req.user._id;
        const blog = await blogModel.create({
            image,
            title,
            content,
            author: userID,
        });
        res.status(201).json({
            message: "Blog created successfully",
            blog,
        });
    } catch (error) {
        console.error("Error creating blog:", error);
        res.status(500).json({
            message: "Something went wrong",
            error: error.message,
        });
    }
};
