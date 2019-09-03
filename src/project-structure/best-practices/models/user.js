// fake db model, it directly calls DB

const users = [
  { id: '1', name: 'User 1', role: 'Software Engineer' },
  { id: '2', name: 'User 2', role: 'Software Architect' },
  { id: '3', name: 'User 3', role: 'Scrum Master' },
];

const findUser = async id => Promise.resolve(users.find(user => user.id === id));

const findUsers = () => Promise.resolve(users);

const create = data =>
  new Promise(resolve => {
    users.push(data);
    resolve(data);
  });

module.exports = {
  findUser,
  findUsers,
  create,
};
