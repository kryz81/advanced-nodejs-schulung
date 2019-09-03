const fs = require('fs');

function addNextTickRecurs(count) {
  let self = this;
  if (self.id === undefined) {
    self.id = 0;
  }

  if (self.id === count) return;

  process.nextTick(() => {
    console.log(`process.nextTick call ${(self.id += 1)}`);
    addNextTickRecurs.call(self, count);
  });
}

addNextTickRecurs(100000);

// will not be called because nextTick queue repeatedly receives a new task
setTimeout(console.log.bind(console, 'setTimeout was called'), 10);
setImmediate(console.log.bind(console, 'setImmediate was called'));

// will not be called because nextTick queue repeatedly receives a new task
fs.readFile(__filename, () => {
  console.log('file read complete callback was called!');
});

console.log('started');
