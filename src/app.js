const { createServer } = require('http');

const buildResponse = require('./services/buildResponse');

module.exports = createServer((req, res) => {
  res.end(`${buildResponse(req.url)}\n`);
});
