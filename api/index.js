const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")

const authRoute = require("./routes/auth.js")
const userRoute = require("./routes/users.js")
const hotelRoute = require("./routes/hotels.js")

dotenv.config()

const app = express()

const connect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("connected to mongoDB");
    }
    catch(error){
        throw error
    }
}

mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected");
})

mongoose.connection.on("connected",()=>{
    console.log("mongoDB connected");
})

//middlewares
app.use(cookieParser())
app.use(express.json())
app.use("/auth",authRoute)
app.use("/users",userRoute)
app.use('/hotels',hotelRoute)

app.use((err,req,res,next)=>{
    const errorMessage = err.message || "something went wrong"
    const errorStatus = err.status || 500
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack

    })
})

app.listen(process.env.PORT,()=>{
    connect()
    console.log("connected to backend!");
})