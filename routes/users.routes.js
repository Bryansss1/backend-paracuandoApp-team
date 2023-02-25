const express = require('express')
const { getUsers ,getoneUser} = require('../controllers/user.controller')
const router = express.Router()


router.get("/",getUsers)
router.get("/:id",getoneUser)


module.exports=router