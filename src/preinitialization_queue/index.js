const { createServer } = require('http');

const { connect, getUser } = require(`${__dirname}/db`);
// const { connect, getUser } = require(`${__dirname}/pool`);

connect(
  'mongo://localhost',
  (err, result) => {
    if (err) {
      throw err;
    }
    console.log(`DB connection: ${result}`);
  }
);

const server = createServer((req, res) => {
  getUser(req.url.substring(1), (err, result) => {
    if (err) {
      res.writeHead(500);
      res.end(err.message);
      return;
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  });
});

server.listen(3000);
