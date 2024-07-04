let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

let numOfnums = chars.filter((n) => typeof n === "number");

let newarr = [...numOfnums, ...chars.filter((s) => typeof s === "string")];

console.log(newarr.copyWithin(0, numOfnums.length, numOfnums.length * 2));
// Needed Output
// ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']

//........................................................//

let numbers = chars.filter(function (n) {
  return typeof n === "number";
});

let Strings = chars.filter(function (s) {
  return typeof s === "string";
});

let newArray = [...numbers, ...Strings];
//   لح يبلش من الانديكس رقم 3 يعني من حرف الآي الى انديكس رقم 6 يعني 3 عناصر بعد الارقام لانو الارقام 3 ومالح ياخد اخر واحد ما لح يتضمن الاخير
console.log(newArray); // [10, 15, 6, 'A', 'B', 'C', 'D', 'E']

console.log(newArray.copyWithin(0, numbers.length, numbers.length * 2));
