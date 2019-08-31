const { createServer } = require('http');
// eslint-disable-next-line node/no-deprecated-api
const { parse } = require('url');

const compute = require('./compute');

const server = createServer((req, res) => {
  const {
    query: { id },
  } = parse(req.url, true);

  res.writeHead(200);
  res.write(String(compute(id)));
  res.end();
});

// eslint-disable-next-line
server.listen(3000, () => console.log('Listening...'));
