const express = require("express")
const verifyToken = require("../utils/jwt")
const {
    updateUser,
    deleteUser,
    getUser,
    getAllUser
} = require("../controllers/users.js")

const router = express.Router()

//user routes
//update
router.put("/:id",verifyToken,updateUser)
//delete
router.delete("/:id",verifyToken,deleteUser)
//get
router.get("/:id",verifyToken,getUser)

//admin routes
//getall
router.get("/",verifyToken,getAllUser)

module.exports = router