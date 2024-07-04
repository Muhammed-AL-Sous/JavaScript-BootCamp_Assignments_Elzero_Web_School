// Method 1 :

// let dateNow = new Date();
// dateNow.setFullYear(1980, 0, 1);
// dateNow.setHours(0, 0, 1);
// console.log(dateNow);

// Method 2 :
let dateNow = new Date(1980, 0, 1);
dateNow.setSeconds(0, 1000);
console.log(dateNow);
