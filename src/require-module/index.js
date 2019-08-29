// require.resolve = find the path to the module, but don't load it

// 1
const hashPath1 = require.resolve('hash');
// console.log(hashPath1);

// 1
const hashPath2 = require.resolve('./hash');
// console.log(hashPath2);

// 3
const fsPath = require.resolve('fs');
// console.log(fsPath);
