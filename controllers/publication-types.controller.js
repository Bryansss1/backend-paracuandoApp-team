const AuthService = require('../services/auth.service')
const UsersService = require('../services/users.service')
const { CustomError } = require('../utils/helpers')
const jwt = require('jsonwebtoken')
const publication_typesServices = require('../services/publication_types.service')
require('dotenv').config()

const getAllpublicationTypes=async(req,res,next)=>{
    try {
        const {page,size}=req.query
        const propiedades=req.query
        const result=await publication_typesServices.getPublicationTypes(page,size,propiedades)
        res.json(result)
    } catch (error) {
        next(error)
    }
}

const getOnepublicationtype=async(req,res,next)=>{
    try {    
    const id=req.params.id
    const result=await publication_typesServices.getOnepubType(id)
    res.json(result)
    } catch (error) {
    next(error)
    }
}

module.exports={
    getAllpublicationTypes
    ,getOnepublicationtype
}