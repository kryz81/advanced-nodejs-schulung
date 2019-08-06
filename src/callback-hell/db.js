// fake db
module.exports = {
  // check credentials
  verify: (username, password, cb) => {
    setImmediate(() => {
      if (username !== 'user' || password !== 'pass') {
        return cb(new Error('Invalid username/password'));
      }
      cb(null, { id: '123', name: 'My User', username: 'user' });
    });
  },
  // get user roles
  getRoles: (userId, cb) => {
    setTimeout(() => {
      // check user here
      cb(null, ['admin', 'dev']);
    }, 2000);
  },
  // log user access
  logAccess: (userId, cb) => {
    setImmediate(() => {
      // log user here
      cb(null, true);
    });
  },
};
