const { createReadStream } = require('fs');
const colors = require('colors');

// 1. non-flowing mode
const stream = createReadStream(`${__dirname}/index.js`, { highWaterMark: 100 });

let data = '';
stream.on('readable', function() {
  let chunk = '';
  while ((chunk = this.read())) {
    console.log(`Chunk received, size: ${chunk.length}`.cyan);
    data += chunk;
  }
});

stream.on('end', () => {
  console.log(`Streaming finished, read chars: ${data.length}`.cyan);
});

// 2. flowing mode
const stream2 = createReadStream(`${__dirname}/index.js`, { highWaterMark: 100 });

let data2 = '';

stream2.on('data', chunk => {
  console.log(`Cunk received, size: ${chunk.length}`.yellow);
  data2 += chunk;
});

stream2.on('end', () => {
  console.log(`Streaming finished, read chars: ${data2.length}`.yellow);
});
