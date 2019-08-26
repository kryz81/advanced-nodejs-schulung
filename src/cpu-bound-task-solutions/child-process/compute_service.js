const { fork } = require('child_process');

const computeService = n => {
  console.log(`Requested: ${n}`);

  return new Promise(resolve => {
    // create a process
    const compute = fork(`${__dirname}/compute.js`);

    // let the process do the job
    compute.send(n);

    // resolve on result
    compute.on('message', result => {
      console.log(`Result received: ${result}`);
      resolve(result);
    });
  });
};

module.exports = computeService;
