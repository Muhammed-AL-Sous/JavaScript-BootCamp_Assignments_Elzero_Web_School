let start = 10;
let end = 0;
let stop = 3;

for (i = start; i >= stop; i--) {
  if (i >= start) {
    console.log(`${i}`);
  } else {
    console.log(`${end}${i}`);
  }
  if (i === stop) break; // هذا السطر اختياري
}

// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03
