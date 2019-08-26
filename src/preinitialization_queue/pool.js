const db = require(`${__dirname}/db`);

let pendingOps = [];
const connected = false;

const flush = () => {
  pendingOps.forEach(op => {
    db[op.method].apply(null, op.args);
  });
  pendingOps = [];
};

exports.connect = (conn, cb) => {
  db.connect(conn, (err, isConnected) => {
    if (err) {
      return cb(err);
    }

    flush();
    cb(null, isConnected);
  });
};

exports.getUser = (id, cb) => {
  if (!connected) {
    pendingOps.push({ method: 'getUser', args: [id, cb] });
    return;
  }
  db.getUser(id, cb);
};
