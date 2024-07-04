let nums = [2, 12, 11, 5, 10, 1, 99];

// let newNums = nums.reduce(function (acc, current) {
//   if (current % 2 === 0) {
//     return acc * current;
//   } else {
//     return acc + current;
//   }
// }, 1);

// console.log(newNums);

// ============================================== //

// Method Two

let newNums = nums.reduce(function (acc, current) {
  return current % 2 ? acc + current : acc * current;
}, 1);

console.log(newNums);

// 500

// ============================================== //
