const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")

const authRoute = require("./routes/auth.js")
const userRoute = require("./routes/users.js")
const adminRoute = require("./routes/admin.js")
const roomRoute = require("./routes/rooms.js")

const connect = require("./utils/service.js")

dotenv.config()

const app = express()

//middlewares
app.use(cookieParser())
app.use(express.json())

app.use("/auth",authRoute)
app.use("/users",userRoute)
// app.use('/admin',adminRoute)
app.use("/rooms",roomRoute)

app.listen(process.env.PORT,()=>{
    connect()
    console.log("connected to backend!");
})