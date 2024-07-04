let start = 0;
let swappedName = "elZerO";
let newArray = [];

for (let i = start; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toLowerCase()) {
    newArray.push(swappedName[i].toUpperCase());
  } else {
    newArray.push(swappedName[i].toLowerCase());
  }
}

console.log(newArray.join(""));
