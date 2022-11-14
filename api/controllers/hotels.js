const Hotel = require("../models/Hotel.js")

const createHotel =  async (req,res)=>{    
    const newHotel = new Hotel(req.body)
    try{
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    }catch(err){
        res.status(500).json(err)
    }
}

const updateHotel = async (req,res)=>{
     
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
          );
        res.status(200).json(updatedHotel)
    }catch(err){
        res.status(500).json(err)
    }
}

const deleteHotel = async (req,res)=>{
     
    try{
        await Hotel.findByIdAndDelete(req.params.id);
        const hotel = await Hotel.find()
        res.status(200).json(hotel)
    }catch(err){
        res.status(500).json(err)
    }
}

const getHotel = async (req,res)=>{
     
    try{
        const hotel = await Hotel.findById(req.params.id);
        res.status(200).json(hotel)
    }catch(err){
        res.status(500).json(err)
    }
}

const getAllHotel = async (req,res)=>{
    try{
        const hotel = await Hotel.find();
        res.status(200).json(hotel)
    }catch(err){
        res.status(500).json(err)
    }
}

module.exports = {
    getHotel,
    getAllHotel,
    createHotel,
    updateHotel,
    deleteHotel
}