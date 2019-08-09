const { createServer } = require('http');

const buildResponse = require('./services/buildResponse');

const server = createServer((req, res) => {
  res.end(`${buildResponse(req.url)}\n`);
});

const port = process.env.APP_PORT || 3000;

// eslint-disable-next-line no-console
server.listen(port, () => console.log(`Listening on ${port}`));
