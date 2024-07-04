let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = allArrs.concat(arr1, arr2).sort();

allArrs = allArrs
  .slice(arr1.length + true)
  .join("")
  .toLowerCase();
console.log(allArrs); // fxy

// ========================================== //

// Method Two

// let arr1 = ["A", "C", "X"];
// let arr2 = ["D", "E", "F", "Y"];
// let allArrs = [];

// allArrs = allArrs.concat(arr1, arr2).sort();

// allArrs = allArrs.slice(arr2.length).join("").toLowerCase();
// console.log(allArrs);
