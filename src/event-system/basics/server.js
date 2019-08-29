const { createServer } = require('http');
const { logger, maintenance } = require('./listeners');

const server = createServer();

const listeners = [logger, maintenance];
listeners.forEach(listener => server.on('request', listener));

server.on('request', (req, res) => {
  res.end('OK');
});

// eslint-disable-next-line no-console
server.listen(3000, () => console.log('Listening on 3000...'));
