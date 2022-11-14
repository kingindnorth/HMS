const jwt = require("jsonwebtoken")

const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token
    console.log("hello  from token",token)
    if(!token) return res.status(404).json("not authenticated")
    jwt.verify(token,process.env.JWT,(err,info)=>{
        if(err) return res.status(401).json("invalid token")
        req.user = info
        next()
    })
}

const verifyAdmin = (req,res,next)=>{
    verifyToken(req,res,next,()=>{
        console.log(req.user.isAdmin)
        if (req.user.isAdmin) {
            next()
        } 
        else return res.status(400).json("not authenticated")
    })
}

const verifyUser = (req,res,next)=>{
    verifyToken(req,res,next,()=>{
        console.log(req.user.id)
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next()
        } 
        else return res.status(400).json("not authenticated")
    })
}


module.exports = {
    verifyUser,
    verifyAdmin
}