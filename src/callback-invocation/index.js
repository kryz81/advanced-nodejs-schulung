const { readFile } = require('fs');

// const fileName = './index.js';
const fileName = './non-existing.js';

const computeLength = data => {
  return data.length;
};

const computeFileContent = (fileName, cb) => {
  console.log('[step 1]');
  readFile(fileName, (err, data) => {
    console.log('[step 2]');
    if (err) {
      console.log('[step 3]');
      cb(err);
      // ...
    }
    console.log('[step 4]');
    const result = computeLength(data);
    cb(null, result);
  });
};

computeFileContent(fileName, (err, result) => {
  console.log('[step 5]');
  if (err) {
    console.log('[step 7]');
    console.log(`Something went wrong: ${err.message}`);
    // ...
  }
  console.log('[step 7]');
  console.log(`Result: ${result}`);
});
