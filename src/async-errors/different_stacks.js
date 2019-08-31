const getUserFromDB = (id, cb) => {
  setTimeout(() => {
    if (!id) {
      throw new Error('Invalid id');
    }
    cb(null, `User ${id}`);
  }, 1000);
};

try {
  getUserFromDB(null, (err, user) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log(user);
  });
} catch (e) {
  console.log('Cannot read user');
}

// event handler put to the timers queue
// the event loop run the handler
