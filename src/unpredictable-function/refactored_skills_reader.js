const { readFile } = require('fs');

const cache = {};

const getSkills = (employee, cb) => {
  // return from cache
  if (cache[employee]) {
    setImmediate(() => {
      cb(null, cache[employee]);
    });
    return;
  }

  // if not in cache read employee data
  readFile(`${__dirname}/data/${employee}.txt`, 'utf-8', (err, content) => {
    if (err) {
      return cb(err);
    }

    const skills = content.split(';').filter(String);

    // cache employee skills
    cache[employee] = skills;

    cb(null, skills);
  });
};

module.exports = employee => {
  // multiple listeners can listen for employee skills
  const listeners = [];

  getSkills(employee, (err, result) => {
    if (err) {
      throw err;
    }

    // send skills to each listener
    listeners.forEach(listener => listener(result));
  });

  return {
    onData: listener => listeners.push(listener),
  };
};
