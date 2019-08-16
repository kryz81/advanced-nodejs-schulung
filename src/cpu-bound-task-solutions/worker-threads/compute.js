const { parentPort, workerData } = require('worker_threads');

const compute = n => {
  if (n > 1) {
    return compute(n - 1) + compute(n - 2);
  }
  return n;
};

console.log(`Got a job to do: ${workerData}`);

// worker receives workerData
const result = compute(workerData);

// computes the result and sends back
parentPort.postMessage(result);
