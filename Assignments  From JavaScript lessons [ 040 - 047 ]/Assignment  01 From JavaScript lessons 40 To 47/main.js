let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// // Method 1
myFriends.pop();
console.log(myFriends.slice()); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.length = 3;
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// method 3
console.log(myFriends.slice(false, num));

// Method 4
console.log(myFriends.slice(myFriends.indexOf("Ahmed"), num));

// Method 5
console.log(myFriends.slice(-myFriends.lastIndexOf("Gamal") - true, num));

// Method 6
console.log(myFriends.splice(0, num));
// اطبع لي العناصر التي اريد حذفها
