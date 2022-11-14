const User = require("../models/User.js")

const updateUser = async (req,res)=>{
     
    try{
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
          );
        res.status(200).json(updatedUser)
    }catch(err){
        res.status(500).json(err)
    }
}

const deleteUser = async (req,res)=>{
     
    try{
        await User.findByIdAndDelete(req.params.id);
        const user = await User.find()
        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    }
}

const getUser = async (req,res)=>{
     
    try{
        const user = await User.findById(req.params.id);
        console.log(user)
        const {isAdmin, password, ...others} = user._doc
        res.status(200).json({...others})
    }catch(err){
        res.status(500).json(err)
    }
}

const getAllUser = async (req,res)=>{
    try{
        const user = await User.find();
        res.status(200).json(user)
    }catch(err){
        res.status(500).json(err)
    }
}

module.exports = {
    getUser,
    getAllUser,
    updateUser,
    deleteUser
}