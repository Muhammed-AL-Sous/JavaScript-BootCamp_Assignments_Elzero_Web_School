let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let numbersContent = numsAndStrings
  .filter(function (ele) {
    // return !isNaN(parseInt(ele));
    //Or
    return typeof ele === "number";
  })
  .map(function (ele) {
    return -ele;
  });

console.log(numbersContent);

// [-1, -10, 10, 20, -5, -3]
