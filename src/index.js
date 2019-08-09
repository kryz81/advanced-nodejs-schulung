const { createServer } = require('http');

const server = createServer((req, res) => {
  res.end('ok\n');
});

const port = process.env.APP_PORT || 3000;

// eslint-disable-next-line no-console
server.listen(port, () => console.log(`Listening on ${port}`));
