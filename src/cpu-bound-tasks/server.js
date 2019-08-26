const { createServer } = require('http');
const { parse } = require('url');

const compute = n => {
  if (n > 1) {
    return compute(n - 1) + compute(n - 2);
  }
  return n;
};

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
