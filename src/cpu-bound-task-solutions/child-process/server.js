const { createServer } = require('http');
const { parse } = require('url');

const computeService = require('./compute_service');

const server = createServer(async (req, res) => {
  const {
    query: { id },
  } = parse(req.url, true);

  res.writeHead(200);

  res.write(String(await computeService(id)));
  res.end();
});

// eslint-disable-next-line
server.listen(3000, () => console.log('Listening...'));
