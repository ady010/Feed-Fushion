const userModel = require("../Models/user.model")

module.exports.createUser = async ({ name, email, password }) => {

    if (!name || !email || !password) {
        throw new Error("All fields are required");
        
    }

    const isUserExits = await userModel.findOne({
        $or: [{ name }, { email }]
    })

    if (isUserExits) {
         throw new Error("Users already exits");
         
    }

    const hashed = await userModel.hashPassword

    const user =  await userModel.create({ name, email, password: hashed })

    
    delete user._doc.password
    return user

}

