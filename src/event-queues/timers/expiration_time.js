const start = process.hrtime();

setTimeout(() => {
  const end = process.hrtime(start);
  console.log(`timeout callback executed after ${end[0]}s and ${end[1] / 10 ** 9} ms`);
}, 2000);
