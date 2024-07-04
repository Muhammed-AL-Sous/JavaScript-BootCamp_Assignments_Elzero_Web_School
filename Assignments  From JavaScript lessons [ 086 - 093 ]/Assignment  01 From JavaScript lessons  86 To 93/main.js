// 1
let MyElementOne = document.getElementById("elzero");
console.log(MyElementOne);

// 2
let MyElementTwo = document.getElementsByClassName("element");
console.log(MyElementTwo[0]);

// 3
let MyElementThree = document.getElementsByTagName("div");
console.log(MyElementThree[0]);

// 4
let MyElementFour = document.querySelector("[name='js']");
console.log(MyElementFour);

// 5
let MyElementFive = document.querySelector("#elzero");
console.log(MyElementFive);

//6
let MyElementSix = document.querySelector(".element");
console.log(MyElementFive);

// 7
let MyElementSeven = document.querySelector("div");
console.log(MyElementFive);

// 8
let MyElementEight = document.querySelectorAll("body > div");
console.log(MyElementEight[0]);

// 9
let MyElementNine = document.querySelectorAll("#elzero");
console.log(MyElementNine[0]);

// 10
let MyElementTen = document.querySelectorAll(".element");
console.log(MyElementTen[0]);

// 11
let MyElementEleven = document.getElementsByName("js");
console.log(MyElementEleven[0]);

// 12
let MyElementTwelve = document.body.children[0];
console.log(MyElementTwelve);

// 13
let MyElementThirteen = document.body.firstElementChild;
console.log(MyElementThirteen);

// 14
let MyElementFourteen = document.querySelectorAll("div");
console.log(MyElementFourteen[0]);

// 15
let MyElementFiveteen = document.body.firstChild;
console.log(MyElementThirteen);
