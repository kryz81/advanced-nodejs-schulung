const swaggerJSDoc = require('swagger-jsdoc');

const swaggerDefinition = {
  info: {
    title: 'My App',
    version: '1.0.0',
  },
  host: 'localhost:3000',
  basePath: '/',
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      name: 'Authorization',
      scheme: 'bearer',
      in: 'header',
    },
  },
};

const options = {
  swaggerDefinition,
  apis: [`${__dirname}/../handlers/*.js`],
};

// generate open api spec from handlers
const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
