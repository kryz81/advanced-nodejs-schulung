const { createServer } = require('http');
// eslint-disable-next-line
const { parse } = require('url');

const server = createServer(async (req, res) => {
  const {
    query: { id },
  } = parse(req.url, true);

  res.writeHead(200);

  res.write(`Computed for ${id}`);
  res.end();
});

// eslint-disable-next-line
server.listen(3000, () => {
  console.log(`Listening on port 3000`);
});
