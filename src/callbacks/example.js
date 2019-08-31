const { writeFile } = require('fs');

// eslint-disable-next-line no-unused-vars
const saveContent = (content, cb) => {
  writeFile('./data.txt', content, err => {
    if (err) {
      return cb(err);
    }
    cb(null, { file: 'data.txt', size: content.length });
  });
};

// good practice: name for callback handler
const saveContentHandler = (err, result) => {
  // err always as first parameter
  if (err) {
    // check for error first and if set return early
    console.log(err.message);
    return;
  }
  console.log(result);
};

saveContent('my text context', saveContentHandler);
