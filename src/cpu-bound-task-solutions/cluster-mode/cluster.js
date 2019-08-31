const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  const cpus = os.cpus().length;

  console.log(`Clustering to ${cpus} CPUs`);

  for (let i = 0; i < cpus; i += 1) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code) => {
    // first check if worker wasn't killed intentionally
    if (code !== 0 && !worker.suicide) {
      console.log(`Worker no. ${worker.id} crashed, starting a new worker...`);
      cluster.fork();
    }
  });
} else {
  // it's not the master process -> run a new worker
  // eslint-disable-next-line global-require
  require(`${__dirname}/server.js`);
}
