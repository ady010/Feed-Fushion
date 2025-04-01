const userModel = require("../Models/user.model")
const {validationResult} = require("express-validator")


module.exports.register = (req, res)=>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({message:errors})
    }
    
    try{
        const {name, email, password } = req.body
        

        const user = userModel.findOne({email})
        if(!user){
            res.status(400).json({message:"Invalid User"})
        }
        if(!password){
            res.status(400).json({message:"Invalid User"})
        }  
        res.send("fslffsdf")
    }
    catch(err){

    }
    
}
