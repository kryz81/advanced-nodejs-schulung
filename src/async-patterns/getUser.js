const users = [{ id: 'user1', username: 'Tim' }, { id: 'user2', username: 'Paula' }];

module.exports = (username, cb) => {
  console.log(`Looking for user: ${username}`);
  setTimeout(() => {
    const foundUser = users.find(user => user.username === username);

    if (!foundUser) {
      return cb(new Error('User not found'));
    }

    cb(null, foundUser);
  }, 500);
};
