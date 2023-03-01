const express = require('express')
const { getUsers,getoneUser, updateser} = require('../controllers/user.controller')
const router=express.Router()


router.get("/",getUsers)
router.get("/:id",getoneUser)
router.put("/",updateser)

module.exports=router