let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

console.log(Array.from(new Set(myFriends)).sort());

// Needed Output
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

//.................................................//

// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

// let myNewList = [...new Set([...myFriends.sort()])]

// console.log(myNewList)

// // Needed Output
// // (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']
