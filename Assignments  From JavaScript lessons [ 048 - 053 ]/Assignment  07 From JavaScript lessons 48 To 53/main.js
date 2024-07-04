let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

// Method One :

for (let i = ++start; i < mix.length; i++) {
  if (typeof mix[i] === "string") {
    continue;
  }
  console.log(mix[i]);
}

// ========================================== //

// Method Two :

for (let i = start; i < mix.length; i++) {
  if (typeof mix[i] === "string") {
    continue;
  } else if (mix[i] === +true) {
    continue;
  }
  console.log(mix[i]);
}

// ========================================== //

// Method Three :

for (let i = start; i < mix.length; i++) {
  if (typeof mix[i] === "string" || mix[i] === +true) {
    continue;
  }
  console.log(mix[i]);
}

// Output
// 2;
// 3;
// 4;

// ========================================== //
