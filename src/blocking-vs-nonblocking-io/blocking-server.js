const { createServer } = require('http');
const bcrypt = require('bcrypt');

const generatePasswordHash = () => {
  const salt = bcrypt.genSaltSync(12);
  return bcrypt.hashSync('my-password', salt);
};

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Generating hash...\n');

  const hash = generatePasswordHash();

  res.end(hash);
});

// eslint-disable-next-line no-console
server.listen(3000, () => console.log('Listening on 3000...'));
