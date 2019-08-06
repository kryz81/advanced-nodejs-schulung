const db = require(__dirname + '/db');

let pendingOps = [];
let connected = false;

const flush = () => {
  pendingOps.forEach(op => {
    db[op.method].apply(null, op.args);
  });
  pendingOps = [];
};

exports.connect = (conn, cb) => {
  db.connect(conn, (err, connected) => {
    if (err) {
      return cb(err);
    }

    flush();
    cb(null, connected);
  });
};

exports.getUser = (id, cb) => {
  if (!connected) {
    pendingOps.push({ method: 'getUser', args: [id, cb] });
    return;
  }
  db.getUser(id, cb);
};
