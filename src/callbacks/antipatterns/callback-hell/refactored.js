/* eslint-disable no-use-before-define */

const db = require(`${__dirname}/db`);

const verifyHandler = cb => (error, userInfo) => {
  if (error) {
    return cb(error);
  }
  db.getRoles(userInfo.id, rolesHandler(userInfo, cb));
};

const rolesHandler = (userInfo, cb) => (error, roles) => {
  if (error) {
    return cb(error);
  }
  db.logAccess(userInfo.username, logHandler(userInfo, roles, cb));
};

const logHandler = (userInfo, roles, cb) => error => {
  if (error) {
    return cb(error);
  }
  cb(null, userInfo, roles);
};

// function verifies user credentials
const verifyUser = (username, password, cb) => {
  db.verify(username, password, verifyHandler(cb));
};

verifyUser('user', 'pass', (err, userInfo, roles) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log(userInfo, roles);
});
