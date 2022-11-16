const Room = require("../models/Room.js")

const createRoom = async(req,res)=>{
    if(!req.user.isAdmin) return res.status(404).json("not authenticated")
    const room = new Room(req.body)
    try{
        const savedRoom = await room.save()
        res.status(200).json(savedRoom)

    }catch(err){
        res.status(500).json(err)
    }
}

const updateRoom = async(req,res)=>{
    if(!req.user.isAdmin) return res.status(404).json("not authenticated")
    try{
        const updatedRoom = await Room.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
          )
        res.status(200).json(updatedRoom)  
    }catch(err){
        res.status(500).json(err)
    }
}

const deleteRoom = async(req,res)=>{
    if(!req.user.isAdmin) return res.status(404).json("not authenticated")
    try{
        await Room.findByIdAndDelete(req.params.id)
        res.status(200).json("room has been deleted")
    }catch(err){
        res.status(500).json(err)
    }
}

const getAllRoom = async(req,res)=>{
    try{
        const rooms = await Room.find()
        res.status(200).json(rooms)
    }catch(err){
        res.status(500).json(err)
    }
}

const getRoom = async(req,res)=>{
    try{
        const room = await Room.findById(req.params.id)
        res.status(200).json(room)
    }catch(err){
        res.status(500).json(err)
    }
}

const bookRoom = async(req,res)=>{
    if(req.user.id !== req.params.id) return res.status(404).json("not authenticated")
    try{
        //todo- book room logic
        res.status(200).json("room booked")
    }catch(err){
        res.status(500).json(err)
    }
}

const pay = async(req,res)=>{
    if(req.user.id !== req.params.id) return res.status(404).json("not authenticated")
    try{
        //todo- pay logic
        res.status(200).json("payment done")
    }catch(err){
        res.status(500).json(err)
    }
}

module.exports ={
    createRoom,
    updateRoom,
    deleteRoom,
    getAllRoom,
    getRoom,
    bookRoom,
    pay
}