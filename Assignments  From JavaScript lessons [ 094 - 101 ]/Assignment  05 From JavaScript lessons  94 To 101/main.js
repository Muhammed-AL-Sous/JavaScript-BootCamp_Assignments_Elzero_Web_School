// Method One

document.addEventListener("click", function (e) {
  if (e.target.nodeName !== "body") {
    console.log(`This Is ${e.target.nodeName.toLowerCase()}`);
  }
});

// ============================================================= //

// Method Two

// let div = document.querySelector("div");
// let span = document.querySelector("span");
// let p = document.querySelector("p");
// let article = document.querySelector("article");
// let section = document.querySelector("section");

// div.onclick = function () {
//   console.log(`This Is ${div.nodeName.toLowerCase()}`);
// };

// span.onclick = function () {
//   console.log(`This Is ${span.nodeName.toLowerCase()}`);
// };

// p.onclick = function () {
//   console.log(`This Is ${p.nodeName.toLowerCase()}`);
// };

// article.onclick = function () {
//   console.log(`This Is ${article.nodeName.toLowerCase()}`);
// };

// section.onclick = function () {
//   console.log(`This Is ${section.nodeName.toLowerCase()}`);
// };

// ============================================================= //
