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

    const hashed = await userModel.hashPassword(password);

    const user =  await userModel.create({ name, email, password: hashed })
    
    delete user._doc.password
    // await user.save();
    return user

}

module.exports.loginUserController = async ({email, password}) =>{
    console.log(email, password)
    const user = await userModel.findOne({ email })
        console.log(user)
        if (!user) {
           throw new Error("Invalid User");
           
        }
        const isMatch = await user.comparePassword(password)
        if(!isMatch){
            throw new Error("Invalid User");
        }

        delete user._doc.password
        return user
        
}
