let num = "10";

// Solution One
console.log(+num + +num); // 10 + 10 = 20

// Solution Two
console.log(num * (true + true)); // 20

// Solution Three
console.log(((num * num) / num) * (true + true)); // 20

// Solution Four
console.log(+num++ * ++num - --num * --num + num); // 10*12 - 11*10 + 10 = 120 - 110 + 10

// Solution Five
console.log(++num + num - true - true); // 20
