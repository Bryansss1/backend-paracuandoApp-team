const ProfilesService = require("../services/profiles.service")
const jwt = require('jsonwebtoken')
require("dotenv").config()

const authMiddleware=async(req,res,next)=>{
try {
let token=req.headers.authorization
token=token.replace("Bearer ","")
const decodeddd=jwt.verify(token,process.env.JWT_SECRET_WORD,(error,decode)=>{
if(error){
res.status(401).json({error:"invalid token",message:"el token no es valido,envia uno correcto"})
}else{next(); console.log(decode);}
})
} catch (error) {
next(error)
}
}

module.exports=authMiddleware