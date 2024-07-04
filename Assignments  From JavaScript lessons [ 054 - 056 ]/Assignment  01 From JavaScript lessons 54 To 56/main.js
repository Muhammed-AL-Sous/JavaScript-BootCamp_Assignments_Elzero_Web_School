let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

let newArray = [];

while (index < friends.length) {
  if (friends[index][counter] !== "A" && typeof friends[index] === "string") {
    newArray.push(friends[index]);
  }
  index++;
}
console.log(`"${counter + +true} => ${newArray[counter]}"`);
console.log(`"${++counter + +true} => ${newArray[counter]}"`);

// Output
// "1 => Sayed"
// "2 => Mahmoud"
