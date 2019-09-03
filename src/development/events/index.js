const eventBus = require(`${__dirname}/event_bus`);

const bootstrapEvents = app => {
  eventBus.on('create_user', userData => {
    // call all external services here

    console.log('create user triggered', userData);
  });
};

module.exports = bootstrapEvents;
