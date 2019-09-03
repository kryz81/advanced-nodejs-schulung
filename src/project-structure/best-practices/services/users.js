const { v4 } = require('uuid');

const model = require(`${__dirname}/../models/user`);
const eventBus = require(`${__dirname}/../events/event_bus`);

const getUsers = () => model.findUsers();

const getUserById = id => model.findUser(id);

const createUser = async data => {
  const newUser = await model.create({
    ...data,
    id: v4(),
  });

  // we need to send new users to a few external systems
  // 1. inform ERP
  // 2. inform Business Analytics
  // 3. inform IT Support

  // good practice is not to call all these external services directly here
  eventBus.emit('create_user', newUser);

  return newUser;
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
};
