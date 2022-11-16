const express = require("express")
const jwt = require("jsonwebtoken")
const verifyToken = require("../utils/jwt")
const {
    getAllRoom,
    getRoom,
    bookRoom,
    pay,
    createRoom,
    updateRoom,
    deleteRoom
} = require("../controllers/rooms.js")

const router = express.Router()

//user routes
router.get("/",getAllRoom)
router.get("/:id",getRoom)
router.post("/bookroom/:id",verifyToken,bookRoom)
router.post("/pay/:id",verifyToken,pay)

//admin routes
router.post("/",verifyToken,createRoom)
router.put("/:id",verifyToken,updateRoom)
router.delete("/:id",verifyToken,deleteRoom)

module.exports = router