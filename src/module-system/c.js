module.exports = () => console.log('I am C module');

// who required me?
console.log(module.parent.filename);
