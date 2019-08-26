const compute = (n, cb) => {
  if (n < 2) {
    return cb(n);
  }

  setImmediate(() => {
    compute(n - 1, sum1 => {
      setImmediate(() => {
        compute(n - 2, sum2 => {
          cb(sum1 + sum2);
        });
      });
    });
  });

  return null;
};

module.exports = compute;
