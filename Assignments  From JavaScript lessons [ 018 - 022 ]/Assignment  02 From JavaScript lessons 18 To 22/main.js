let num = 3;

// Solution One
console.log(num + num); // 3 + 3 = 6

// Solution Two
console.log(num + num++); // 3 + 3 = 6 and +1 to another line

// Soultion Three
console.log(--num + num++); // +1 -1 = 0 , 3 + 3 = 6 and +1 to another line

// Soultion Four
console.log(++num + ++num - --num); // 5 + 6 - 5 = 6

// Solution Five
console.log(num + num - --num); // 5 + 5 - 4 = 6

// Solution Six
console.log(++num - ++num + ++num); // 5 - 6 + 7 = 6

// ====================================================== //

//  Method Two

// let num = 3;

// // Solution One
// console.log(num + num); // 6

// // Solution Two
// console.log(num * num - num); // 6

// // Soultion Three
// console.log(num++ + --num); // 6

// // Soultion Four
// console.log(num-- + ++num); // 6

// // Solution Five
// console.log(num++ * (--num - true)); // 6

// // Solution Six
// console.log(num += num); // 6
