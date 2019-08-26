const { createServer } = require('http');
const { createReadStream } = require('fs');

const server = createServer((req, res) => {
  console.log('Downloading...');
  const stream = createReadStream('./dummy.csv');
  console.log('Sending to the client...');
  stream.pipe(res);
});

server.listen(3000);
