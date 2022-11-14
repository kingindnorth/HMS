const express = require("express")
const {verifyAdmin} = require("../utils/jwt.js")
const {
    createHotel,
    updateHotel,
    deleteHotel,
    getHotel,
    getAllHotel
} = require("../controllers/hotels.js")

const router = express.Router()

//create
router.post("/",verifyAdmin,createHotel)
//update
router.put("/:id",verifyAdmin,updateHotel)
//delete
router.delete("/:id",verifyAdmin,deleteHotel)
//get
router.get("/:id",getHotel)
//getall
router.get("/",getAllHotel)

module.exports = router