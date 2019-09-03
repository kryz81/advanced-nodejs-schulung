const debug = require('debug')('myapp:events');

const eventBus = require(`${__dirname}/event_bus`);

const bootstrapEvents = () => {
  eventBus.on('create_user', userData => {
    // call all external services here

    debug('create user triggered', userData);
  });
};

module.exports = bootstrapEvents;
