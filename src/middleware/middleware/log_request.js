module.exports = (req, res, next) => {
  const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  console.log(`Request received: ${fullUrl}`);
  next();
};
