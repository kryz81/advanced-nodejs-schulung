setInterval(() => {}, 1);

const start = Date.now();
setTimeout(() => {
  console.log(`${Date.now() - start} ms`);
}, 2000);
