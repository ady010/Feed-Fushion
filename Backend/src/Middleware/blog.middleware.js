const blogModel = require("../Models/blog.model")
const {body} = require("express-validator")


module.exports.blogValidation = [
  body("image")
    .isString().withMessage("Image must be a string.")
    .notEmpty().withMessage("Image is required.")
    .trim(),

  body("title")
    .isString().withMessage("Title must be a string.")
    .notEmpty().withMessage("Title is required.")
    .trim(),

  body("content")
    .isString().withMessage("Content must be a string.")
    .notEmpty().withMessage("Content is required.")
    .trim()
];
