const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const register = async(req,res)=>{
    try{
        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(req.body.password, salt);
        user = new User({
            ...req.body,password:hashPassword
        })
        const savedUser = await user.save()
        res.status(200).json(`user created with id:${savedUser._id}`)
    }catch(err){
        res.status(500).json(err)
    }
}

const login = async(req,res)=>{
    try{
        const user = await User.findOne({username:req.body.username})
        if(!user) res.status(404).json("user not found")
        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
          );
        if(!isPasswordCorrect) res.status(400).json("incorrect password")
        const token = jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT)
        const { password, isAdmin, ...others} = user._doc
        res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ details: { ...others }, isAdmin })  
    }catch(err){
        res.status(500).json(err)
    }
}

module.exports = {
    register,
    login
}