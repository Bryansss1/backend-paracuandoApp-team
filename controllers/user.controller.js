const UsersService = require("../services/users.service")
const usersService = new UsersService()

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


module.exports={
getUsers,
}
