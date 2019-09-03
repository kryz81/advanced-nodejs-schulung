const http = require('http');
const name = require('starwars-names').random;

const format = n => (n / (1024 * 1024)).toFixed(1);

setInterval(() => {
  const { rss, external, heapTotal, heapUsed } = process.memoryUsage();
  console.log(
    `rss: ${format(rss)} MB, external: ${format(external)} MB, heap used: ${format(heapUsed)} MB, heap total: ${format(
      heapTotal
    )}`
  );
}, 5000);

const names = {};

function createName() {
  console.log(names);
  let result = name();
  if (names[result]) {
    result += names[result] + 1;
  }
  names[result] = 1;

  return result;
}

http
  .createServer((req, res) => {
    res.end(`Your unique name is:  ${createName(req)} \n`);
  })
  .listen(3000, () => console.log('listening...'));
