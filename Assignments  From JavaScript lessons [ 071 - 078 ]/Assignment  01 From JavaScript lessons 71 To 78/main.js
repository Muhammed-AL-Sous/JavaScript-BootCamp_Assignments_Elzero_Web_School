let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let mixedNumbers = mix
  .map(function (ele) {
    // return isNaN(parseInt(ele)) ? ele : "";
    // Or
    return isNaN(ele) ? ele : "";
    // Or
    // return typeof ele === 'string' ? ele : "";
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });

console.log(mixedNumbers);

// Elzero
