module.exports = (id, db) =>
  new Promise((resolve, reject) => {
    if (!id) {
      reject(new Error('Invalid ID'));
      return;
    }
    return db(id).then(result => result.length);
  });
