const db = require(`${__dirname}/db`);

let pendingOps = [];
let connected = false;

const flush = () => {
  console.log('flush');
  pendingOps.forEach(op => {
    db[op.method].apply(null, op.args);
  });
  pendingOps = [];
};

exports.connect = (conn, cb) => {
  console.log('connect');
  db.connect(conn, (err, isConnected) => {
    if (err) {
      return cb(err);
    }

    connected = true;
    cb(null, isConnected);
    flush();
  });
};

exports.getUser = (id, cb) => {
  if (!connected) {
    pendingOps.push({ method: 'getUser', args: [id, cb] });
    return;
  }
  db.getUser(id, cb);
};
