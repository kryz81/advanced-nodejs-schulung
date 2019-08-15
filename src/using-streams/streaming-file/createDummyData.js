const fs = require('fs');

const cols = 8;

function randomChar() {
  return String.fromCharCode(Math.floor(Math.random() * (122 - 65) + 65));
}

function randomString(length) {
  let string = '';
  for (let i = 0; i < length; i += 1) {
    string += randomChar();
  }
  return string;
}

function randomRow() {
  const cells = [];
  for (let i = 0; i < cols; i += 1) {
    cells.push(randomString(20));
  }
  return `${cells.join(',')}\n`;
}

function writeRow(stream) {
  return new Promise(resolve => {
    stream.write(randomRow(), 'utf8', () => resolve());
  });
}

function createCSV(size) {
  const stream = fs.createWriteStream('dummy.csv');
  for (let i = 0; i < size; i += 1) {
    writeRow(stream);
  }
  stream.end();
}

createCSV(3000000);
