let myArray = ["E", "l", "z", ["e", "r"], "o"];

// let newArray = myArray
//   .reduce(function (acc, current) {
//     return acc.concat(current);
//   }, [])
//   .join("");
// console.log(newArray);

// ============================================== //

// Method Two

// let newArray = myArray
//   .reduce(function (acc, current) {
//     return acc.concat(current);
//   }, [])
//   .reduce(function (acc, current) {
//     return `${acc}${current}`;
//   });

// console.log(newArray);

// ============================================== //

// Method Three

let newArray = myArray
  .reduce(function (acc, current) {
    return acc.concat(current);
  }, [])
  .reduce(function (acc, current) {
    return acc + current;
  });

console.log(newArray);

// Elzero

// ============================================== //
