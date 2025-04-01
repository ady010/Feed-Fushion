const userModel = require("../Models/user.model")


module.exports.register = (req, res)=>{
    const {name, email, password } = req.body

    const user = userModel.findOne({email})
    if(!user){
        res.status(400).json({message:"Invalid User"})
    }
    if(!password){
        res.status(400).json({message:"Invalid User"})
    }  

    res.redirect("/Feed")
}
