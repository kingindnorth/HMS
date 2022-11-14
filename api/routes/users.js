const express = require("express")
const {verifyUser,verifyAdmin} = require("../utils/jwt.js")

const {
    updateUser,
    deleteUser,
    getUser,
    getAllUser
} = require("../controllers/users.js")

const router = express.Router()

//update
router.put("/:id",verifyUser,updateUser)
//delete
router.delete("/:id",verifyUser,deleteUser)
//get
router.get("/:id",verifyUser,getUser)
//getall
router.get("/",verifyAdmin,getAllUser)

module.exports = router