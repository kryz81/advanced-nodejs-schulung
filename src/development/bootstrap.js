const bodyParser = require('body-parser');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');

const routes = require(`${__dirname}/routes`);
const bootstrapEvents = require(`${__dirname}/events`);
const swaggerSpec = require(`${__dirname}/loaders/swaggerspec`);

const bootstrap = app => {
  // loaders, middleware, security...
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(helmet());

  // loaders
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // routes
  app.use(routes);

  // event listener
  bootstrapEvents(app);
};

module.exports = bootstrap;
