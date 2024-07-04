let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

//Method 1
if (haystack.includes(needle)) {
  console.log("Found");
}

//Method 2
if (haystack.indexOf(needle) !== -1) {
  console.log("Found");
}

//Method 3
if (haystack.lastIndexOf(needle) !== -1) {
  console.log("Found");
}

//Method 4
if (needle === haystack[1]) {
  console.log("Found");
}

//Method 5
if (needle === haystack.slice(1, 2).join()) {
  console.log("Found");
}
