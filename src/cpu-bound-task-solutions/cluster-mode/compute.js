const compute = n => {
  if (n > 1) {
    return compute(n - 1) + compute(n - 2);
  }
  return n;
};

module.exports = compute;
