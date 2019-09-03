const usersService = require(`${__dirname}/../services/users`);

const getUsers = async (req, res, next) => {
  try {
    const users = await usersService.getUsers();
    res.json(users);
  } catch (err) {
    next(err);
  }
};

const getUser = async (req, res, next) => {
  try {
    const user = await usersService.getUserById(req.params.id);
    if (!user) {
      res.status(404).json({ msg: 'Not found' });
      return;
    }
    res.json(user);
  } catch (err) {
    next(err);
  }
};

const createUser = async (req, res, next) => {
  try {
    const result = await usersService.createUser({ ...req.body });
    if (!result) {
      res.status(500).json({ msg: 'Cannot create user' });
      return;
    }
    res.status(200).json(result);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
};
