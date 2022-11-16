const mongoose = require("mongoose")

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

module.exports = connect
