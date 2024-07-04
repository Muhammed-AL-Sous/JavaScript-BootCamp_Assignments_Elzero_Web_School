let div = document.querySelector("div");

let counter = setInterval(countdown, 1000);

function countdown() {
  div.innerHTML -= 1;
  if (div.innerHTML === "0") {
    // location.href = "https://elzero.org";
    // OR
    window.open("https://elzero.org", "_self");
  }
}
