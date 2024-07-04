let start = performance.now();

for (let i = 1; i < 100000; i++) {
  console.log(i);
}

let end = performance.now();
let duration = end - start;
console.log(`Loop Took ${duration.toFixed(0)} Milliseconds.`);
// OR
// console.log(`Loop Took ${Math.trunc(duration)} Milliseconds.`);
