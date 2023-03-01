const isAdmin = async (request, response, next) => {
  try {
    let { id } = request.user;
    let superUser = await profilesService.isAdmin(id);
    return next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  isAdmin,
};
