const { readFile, writeFile } = require('fs');
const { gzip } = require('zlib');

const file = './dummy.csv';

console.time('start');

readFile(file, (readErr, fileContent) => {
  if (readErr) {
    return console.log(readErr.message);
  }
  console.log('file read done');
  gzip(fileContent, (gzipErr, zippedContent) => {
    console.log('zip done');
    writeFile(`${file}.gz`, zippedContent, () => {
      console.timeEnd('start');
    });
  });
});
