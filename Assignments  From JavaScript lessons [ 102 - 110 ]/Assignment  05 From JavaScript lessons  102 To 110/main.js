let div = document.querySelector("div");

let counter = setInterval(countdown, 1000);

function countdown() {
  div.innerHTML -= 1;
  if (div.innerHTML === "5") {
    window.open(
      "https://elzero.org",
      "_blank",
      "width=500 , height = 500 , top = 100 , left = 100"
    );
  }

  if (div.innerHTML === "0") {
    clearInterval(counter);
  }
}
