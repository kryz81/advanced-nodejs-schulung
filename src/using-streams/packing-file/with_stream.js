const { createReadStream, createWriteStream } = require('fs');
const { createGzip } = require('zlib');

const file = './dummy.csv';

console.time('start');

createReadStream(file)
  .pipe(createGzip())
  .pipe(createWriteStream(`${file}.gz`))
  .on('finish', () => console.timeEnd('start'));
