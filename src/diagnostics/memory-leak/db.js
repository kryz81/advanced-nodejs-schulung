const { EventEmitter } = require('events');

const db = class extends EventEmitter {
  constructor(props) {
    super(props);
    this.setMaxListeners(0); // reset max, because more than 10 services can listen to the connection
    this.connect();
  }

  connect() {
    setInterval(() => {
      this.emit('connected', {
        async getUsers() {
          return JSON.stringify(['User 1', 'User 2']);
        },
      });
    }, 2000);
  }
};

module.exports = db;
