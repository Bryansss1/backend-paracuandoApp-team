const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require("dotenv").config()
const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Para cuando API",
      version: "1.0.0",
      description:
        "API para una app de propuestas de actividades a realizar en distintos paises de LATAM",
    },
    servers: [
      {
        url: `${process.env.URL}`,
      },
    ],
  },
  apis: ["./routes/auth.routes.js", "./database/models/users.js"],
};

const urlDocumentation = swaggerSpec.definition.servers[0].url;

const swaggerDocs = (app, port) => {
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerJSDoc(swaggerSpec))
  );
  console.log(
    `The documentation is available on ${urlDocumentation}:${port}/api-docs`
  );
};

module.exports = swaggerDocs;
