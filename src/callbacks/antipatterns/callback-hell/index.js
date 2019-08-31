const db = require(__dirname + '/db');

// function verifies user credentials
const verifyUser = (cb, username, password) => {
  db.verify(username, password, (error, userInfo) => {
    if (error) {
      cb(error);
    } else {
      db.getRoles(userInfo.id, (error2, roles) => {
        if (error2) {
          cb('Cannot read roles');
        } else {
          db.logAccess(username, error3 => {
            if (error3) {
              cb(error3);
            } else {
              cb(null, userInfo, roles);
            }
          });
        }
      });
    }
  });
};

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
