const users = [{ id: '1', name: 'User 1' }, { id: '2', name: 'User 2' }];

let connected = false;
let connectionString;

const isConnected = () => {
  if (!connected) {
    throw new Error('Not connected');
  }
};

exports.connect = (conn, cb) => {
  setTimeout(() => {
    connected = true;
    connectionString = conn;
    cb(null, connected);
  }, 10000);
};

exports.getUser = (id, cb) => {
  setImmediate(() => {
    isConnected();
    console.log(`Reading from ${connectionString}`);
    const foundUser = users.find(user => user.id === id);
    cb(null, foundUser);
  });
};
