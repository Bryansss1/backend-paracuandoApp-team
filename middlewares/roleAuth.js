const profilesService = require("../services/profiles.service");

const isAdmin = async (request, response, next) => {
  try {
    let { id } = request.user;
    let isSuperUser = await profilesService.isAdmin(id);
    return next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  isAdmin,
};
