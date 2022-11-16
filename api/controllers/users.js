const User = require("../models/User.js")

const updateUser = async (req,res)=>{
    if(req.user.id === req.params.id || req.user.isAdmin ){
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
    else res.status(404).json("not authenticated") 
}

const deleteUser = async (req,res)=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
        try{
            await User.findByIdAndDelete(req.params.id);
            const user = await User.find()
            res.status(200).json(user)
        }catch(err){
            res.status(500).json(err)
        }
    }
    else res.status(404).json("not authenticated")  
}

const getUser = async (req,res)=>{
    if(req.user.id === req.params.id || req.user.isAdmin){
        try{
            const user = await User.findById(req.params.id);
            console.log(user)
            const {isAdmin, password, ...others} = user._doc
            res.status(200).json({...others})
        }catch(err){
            res.status(500).json(err)
        }
    }
    else res.status(404).json("not authenticated")  
}

const getAllUser = async (req,res)=>{
    if(req.user.isAdmin){
        try{
            const user = await User.find();
            res.status(200).json(user)
        }catch(err){
            res.status(500).json(err)
        }
    }
    else res.status(404).json("not authenticated") 
}

module.exports = {
    getUser,
    getAllUser,
    updateUser,
    deleteUser
}