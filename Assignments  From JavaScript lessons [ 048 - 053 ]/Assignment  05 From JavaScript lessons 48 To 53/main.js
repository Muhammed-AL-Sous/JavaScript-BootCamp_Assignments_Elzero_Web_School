let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let count = +false; // 0

for (let i = +false; i < friends.length; i++) {
  if (friends[i][+false] === letter.toUpperCase()) {
    continue;
  }
  console.log(`"${++count} => ${friends[i]}"`);
}

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"
