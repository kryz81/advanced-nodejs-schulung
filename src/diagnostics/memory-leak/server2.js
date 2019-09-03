const { createServer } = require('http');

const Db = require(`${__dirname}/db`);

const db = new Db();

createServer((req, res) => {
  db.on('connected', async connection => {
    res.end(await connection.getUsers());
  });
}).listen(3000, () => console.log('Listening...'));

const format = n => (n / (1024 * 1024)).toFixed(1);

setInterval(() => {
  const { rss, external, heapTotal, heapUsed } = process.memoryUsage();
  console.log(
    `rss: ${format(rss)} MB, external: ${format(external)} MB, heap used: ${format(heapUsed)} MB, heap total: ${format(
      heapTotal
    )}`
  );
}, 5000);
