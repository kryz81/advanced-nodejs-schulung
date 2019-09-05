const usersService = require(`${__dirname}/../services/users`);

module.exports = (req, res, next) => {
  const { token } = req.query;
  const userWithToken = usersService().find(user => user.token === token);

  if (!userWithToken) {
    res.status(403).json({ msg: 'Access denied' });
    return;
  }

  // add user data to request
  req.user = userWithToken;

  next();
};
