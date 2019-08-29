// modules need to be loaded synchronously
setImmediate(() => {
  module.exports = () => console.log('I am B module');
});
