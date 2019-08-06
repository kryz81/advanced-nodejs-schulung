const users = [{ id: 'user1', username: 'Tim' }, { id: 'user2', username: 'Paula' }];

module.exports = (username, cb) => {
  setTimeout(() => {
    const user = users.find(user => user.username === username);

    if (!user) {
      return cb(new Error('User not found'));
    }

    cb(null, user);
  }, 500);
};
