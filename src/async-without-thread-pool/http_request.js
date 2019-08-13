const { request } = require('https');

const makeRequest = () => {
  const start = Date.now();
  request('https://google.com', res => {
    res.on('data', () => {});
    res.on('end', () => {
      console.log(`${Date.now() - start} ms`);
    });
  }).end();
};

makeRequest();
makeRequest();
makeRequest();
makeRequest();
makeRequest();
makeRequest();
