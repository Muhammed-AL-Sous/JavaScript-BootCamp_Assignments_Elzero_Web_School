let dateNow = new Date();
let myBirthday = new Date("1998-03-30");
let myAge = dateNow - myBirthday;

let seconds = myAge / 1000;
console.log(`My Age In Seconds ${seconds.toFixed()}`);

let minutes = seconds / 60;
console.log(`My Age In Minutes ${minutes.toFixed()}`);

let hours = minutes / 60;
console.log(`My Age In Hours ${hours.toFixed()}`);

let days = hours / 24;
console.log(`My Age In Days ${days.toFixed()}`);

let months = days / 31;
console.log(`My Age In Months ${months.toFixed()}`);

let years = months / 12;
console.log(`My Age In years ${years.toFixed()}`);
