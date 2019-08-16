const { Worker } = require('worker_threads');

module.exports = n => {
  return new Promise((resolve, reject) => {
    // create a new worker
    console.log('Creating a new worker');
    const worker = new Worker(`${__dirname}/compute.js`, { workerData: n });

    // wait for the result
    worker.on('message', resolve);

    // something went wrong
    worker.on('error', reject);

    // worker killed?
    worker.on('exit', code => {
      if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
};
