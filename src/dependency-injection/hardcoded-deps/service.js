const db = require(`${__dirname}/db`);

module.exports = id => {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject(new Error('Invalid ID'));
      return;
    }
    return db(id).then(result => resolve(result.length));
  });
};
