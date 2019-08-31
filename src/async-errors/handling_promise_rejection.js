// run on unhandled promise rejections
process.on('unhandledRejection', err => {
  console.log(err.message);
});

const getUserFromDB = id => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!id) {
        reject(new Error('Invalid id'));
        return;
      }
      resolve(`User ${id}`);
    }, 1000);
  });
};

// forgot to catch error
getUserFromDB()
  .then(user => console.log(user))
  .catch(err => console.log(`Error ${err.message}`));
