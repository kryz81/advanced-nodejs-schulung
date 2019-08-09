module.exports = url => {
  if (!url) {
    throw new Error('Invalid url');
  }
  return `[${String(url)
    .trim()
    .substr(1)}]`;
};
