const bodyParser = require('body-parser');
const helmet = require('helmet');

const routes = require(`${__dirname}/routes`);
const bootstrapEvents = require(`${__dirname}/events`);

const bootstrap = app => {
  // loaders, middleware, security...
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(helmet());

  // routes
  app.use(routes);

  // event listener
  bootstrapEvents(app);
};

module.exports = bootstrap;
