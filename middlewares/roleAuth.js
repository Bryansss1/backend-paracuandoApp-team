const ProfilesService = require("../services/profiles.service");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const isAdmin = async (request, response, next) => {
  try {
    let token = request.headers.authorization;
    token = token.replace("Bearer ", "");
    const decoding = jwt.verify(
      token,
      process.env.JWT_SECRET_WORD,
      async (error, decode) => {
        if (error) {
          response
            .status(401)
            .json({
              error: "invalid token",
              message: "el token no es valido,envia uno correcto",
            });
        } else {
          const superUser = await ProfilesService.isAdmin(decoding.id);
          if (superUser) {
            next();
          }
        }
      }
    );
  } catch (error) {
    next(error);
  }
};

module.exports = isAdmin;
