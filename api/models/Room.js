const mongoose = require("mongoose")

const RoomSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    images:{
        type:[String],
    },
    description:{
        type:String,
    },
    rating:{
        type:Number,
        min:0,
        max:5
    },
    featured:{
        type:Boolean,
        default:false
    },
})

module.exports = mongoose.model("Room",RoomSchema)