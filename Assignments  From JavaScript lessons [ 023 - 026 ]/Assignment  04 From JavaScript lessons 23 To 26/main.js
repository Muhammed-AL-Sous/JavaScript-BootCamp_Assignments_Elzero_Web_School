let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100

console.log(parseFloat(parseFloat(myVar).toFixed(2))); // 100.57
// OR
console.log(Number(parseFloat(myVar).toFixed(2)));
// OR
console.log(+parseFloat(myVar).toFixed(2));
