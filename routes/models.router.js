const express = require('express')
// const routesUsers = require('./users.routes')
const routesPublication_types=require("./publication-types.routes")
// const isAuthenticatedByPassportJwt = require('../libs/passport')
const routesUser=require("./users.routes")
const routesAuth = require('./auth.routes')

function routerModels(app) {
  const router = express.Router()
  app.use('/api/v1', router)
  router.use('/auth', routesAuth)
  router.use("/users",routesUser)
  router.use("/publications-types",routesPublication_types)
}

module.exports = routerModels
