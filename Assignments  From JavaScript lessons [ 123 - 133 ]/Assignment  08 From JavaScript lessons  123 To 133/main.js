let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(Math.max(...n2) * [...n1, ...n2].length);

console.log([...n1, ...n2].sort().length * new Set(n2).keys().next().value);

console.log([...n1, ...n2].sort().length * n1[+isNaN(n1)]);

// // Needed Output
// 210
