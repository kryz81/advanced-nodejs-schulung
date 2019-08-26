const { createServer } = require('http');

// fake db call, it takes 3 seconds to fetch users
const getUsersFromDB = cb => setTimeout(() => cb(null, ['User 1', 'User 2']), 3000);

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('Fetching users...\n');

  // fetch users and don't block
  getUsersFromDB((err, result) => {
    // (check for err here)

    // send users
    res.write(`${result.join(', ')}\n`);
    res.end();
  });
});

// eslint-disable-next-line no-console
server.listen(3000, () => console.log('Listening on 3000...'));
