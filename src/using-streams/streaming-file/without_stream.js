const { createServer } = require('http');
const { readFile } = require('fs');

const server = createServer((req, res) => {
  console.log('Downloading...');
  readFile('./dummy.csv', 'utf8', (err, data) => {
    if (err) {
      return res.end(err.message);
    }
    console.log('Sending to the client...');
    return res.end(`${data.length / 1000 / 1000} MB`);
  });
});

// eslint-disable-next-line
server.listen(3000, () => console.log('Listening...'));
