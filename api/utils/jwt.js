const jwt = require("jsonwebtoken")

const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token
    console.log("hello  from token")
    if(!token) return res.status(404).json("not authenticated")
    jwt.verify(token,process.env.JWT,(err,info)=>{
        if(err) return res.status(401).json("invalid token")
        req.user = info
        next()
    })
}

module.exports = verifyToken