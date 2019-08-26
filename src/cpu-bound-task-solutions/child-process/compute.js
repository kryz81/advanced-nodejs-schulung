const compute = n => {
  if (n > 1) {
    return compute(n - 1) + compute(n - 2);
  }
  return n;
};

process.on('message', n => {
  console.log(`Job received: ${n}`);

  const result = compute(n);

  // send back the result
  console.log(`Computed, sending back result: ${result}`);

  process.send(result);
});
