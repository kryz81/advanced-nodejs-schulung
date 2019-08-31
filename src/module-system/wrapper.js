// we don't see any function here, but it's possible
// to print function arguments
// eslint-disable-next-line no-undef
console.log(arguments);

// actual node.js module wrapper
// eslint-disable-next-line
const wrapper = (_exports, _require, _module, _filename, _dirname) => {};

// it's not global! it comes from wrapper parameters
console.log(__filename);
