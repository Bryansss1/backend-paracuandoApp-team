const UsersService = require("../services/users.service")
const usersService = new UsersService()
const jwt = require('jsonwebtoken')
const AuthService = require('../services/auth.service')
require('dotenv').config()
const authService = new AuthService()

const getUsers=async(req,res,next)=>{
try {
const {page,size}=req.query
const propiedades=req.query
const result=await usersService.getUsersFilter(page,size,propiedades)
res.json(result)
} catch (error) {
next(error)
}
}

const getoneUser=async(req,res,next)=>{
    try {
        const iduser=req.params.id
        let token=req.headers.authorization
        if(token){
        token=token.replace("Bearer ","")
        const tokendecode=jwt.verify(token,process.env.JWT_SECRET_WORD)
        const {id}=tokendecode
        const result=await usersService.getUser(iduser,id)
        res.json(result)
        }else{
        const result=await usersService.getUser(iduser,0)
        res.json(result)
        }
    } catch (error) {
        next(error)
    }
}

const updateser=async(req,res,next)=>{
    try {
        let token=req.headers.authorization
        token=token.replace("Bearer ","")
        const tokendecode=jwt.verify(token,process.env.JWT_SECRET_WORD)
        const {id}=tokendecode
        const {first_name,last_name,phone,code_phone,country_id,image_url}=req.body
        const result=await usersService.updateUser(id,{first_name,last_name,phone,code_phone,country_id,image_url})
        res.json(result)
    } catch (error) {
        next(error)
    }
}


module.exports={
getUsers,
getoneUser,
updateser
}
