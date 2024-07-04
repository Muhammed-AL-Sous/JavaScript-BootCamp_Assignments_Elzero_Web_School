let myImg = document.querySelectorAll("img");

for (let i = 0; i < myImg.length; i++) {
  myImg[i].setAttribute(
    "src",
    "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
  );
  myImg[i].setAttribute("alt", "Elzero Logo");
  console.log(myImg[i]);
}
