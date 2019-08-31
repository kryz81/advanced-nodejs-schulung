const db = require(__dirname + '/db');

// reactor
// 1. use "callback as the last parameter" convention
// 2. avoid if..else and return error early
// 3. Send real errors, error is not a string
// 4. split logic into separate callback handlers

const verifyUser = (username, password, cb) => {}; // TODO

verifyUser(
  (err, userInfo, roles) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log(userInfo, roles);
  },
  'user',
  'pass'
);
