let a = 21;
let b = 20;
let c = "true".length;

console.log("_" + (a + "_" + b).repeat(c) + "_");

console.log("_" + (a + "_" + b).repeat(true + true + true + true) + "_");

console.log("_" + a + "_" + b + a + "_" + b + a + "_" + b + a + "_" + b + "_"); // _21_2021_2021_2021_20_

// or
// _21_20  21_20  21_20_ then delete Spaces _21_2021_2021_20_
console.log("_" + (a + "_" + b).repeat(4) + "_");

// or
// _21_20  21_20  21_20_ then delete Spaces _21_2021_2021_20_
console.log("_" + `${a}_${b}`.repeat(4) + "_");
