let index = 10;
let jump = 2;

for (;;) {
  let i = index;
  if (i <= jump) {
    break;
  }
  console.log(i);
  index -= jump;
}
// ======================================= //

// Method Two

// let index = 10;
// let jump = 2;
// let i = index;

// for (;;) {
//   console.log(`${i}`);
//   if (i <= jump + jump) {
//     break;
//   }
//   i -= jump;
// }

// // Output
// 10;
// 8;
// 6;
// 4;

// ======================================= //

// Method Three

// let index = 10;
// let jump = 2;

// for (;;) {
//   console.log(index);
//   if (index <= jump + jump) {
//     break;
//   }
//   index -= jump;
// }

// Output
// 10;
// 8;
// 6;
// 4;

// ======================================= //
