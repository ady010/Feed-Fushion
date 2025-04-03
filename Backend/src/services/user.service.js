const userModel = require("../Models/user.model")

const createUser = async ({name, email, password})=>{

    if(!username || !email || !password){
        return res.status(400).json({message:"All fields are required"})
    }

    const isUserExits = await userModel.findOne({
        $or: [{name}, {email}]
    })

    if(isUserExits){
        return res.status(400).json({message:"User Already Exits"})
    }

    const hashed = await userModel.hashPassword

    const user = new userModel({name, email, password: hashed})

    await user.save()
    return user

}

