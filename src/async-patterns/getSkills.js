const { readFile } = require('fs');

module.exports = (employee, cb) => {
  // if not in cache read employee data
  readFile(`${__dirname}/data/${employee}.txt`, 'utf-8', (err, content) => {
    if (err) {
      return cb(err);
    }

    const skills = content.split(';').filter(String);

    cb(null, skills);
  });
};
