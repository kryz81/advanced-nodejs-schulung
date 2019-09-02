// timers

// 1. run some timer actions
setTimeout(() => {
  console.log(`[timeout]`);
}, 500);

let counter = 0;
const id = setInterval(() => {
  console.log(`[interval ${counter}]`);
  counter += 1;
  if (counter > 5) {
    clearInterval(id);
  }
}, 1000);

// 2. program (event loop) continues to iterate and run other tasks
for (let i = 0; i <= 10; i += 1) {
  console.log(i);
}

// 3. node checks if there there are still handlers in the timers queue or some not finished actions (refs)
// setInterval is still running - do not exit
