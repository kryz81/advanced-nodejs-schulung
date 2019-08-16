const { createServer } = require('http');
const { parse } = require('url');

const computeImmediate = require('./computeImmediate');

const server = createServer((req, res) => {
  const {
    query: { id },
  } = parse(req.url, true);

  computeImmediate(id, result => {
    res.end(String(result));
  });
});

// eslint-disable-next-line
server.listen(3000, () => console.log('Listening...'));
