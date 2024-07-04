let theNumber = 100020003000;

console.log(
  +Array.from(new Set(theNumber.toString()))
    .filter(function (e) {
      return e != 0;
    })
    .map(function (e) {
      return Number(e);
    })
    .join("")
);
// Needed Output number not string
// 123;

// ============================================== //

// Another Solution
// console.log(+[...new Set(theNumber.toString())].sort().join(""));

// ============================================== //

// Another Solution
// console.log(
//   +[...new Set(theNumber.toString())]
//     .sort()
//     .filter((e) => e > false)
//     .join("")
// );
// // Needed Output number not string
// 123;

// ============================================== //
