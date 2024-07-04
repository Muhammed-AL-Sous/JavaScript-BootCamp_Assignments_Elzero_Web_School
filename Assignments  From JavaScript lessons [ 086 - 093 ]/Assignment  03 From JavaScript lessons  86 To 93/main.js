let dollarInp = document.querySelector("[name='dollar']");
let res = document.querySelector(".result");

dollarInp.oninput = function () {
  res.textContent = `${dollarInp.value} USD Dollar =
   ${(dollarInp.value * 15.6).toFixed(2)} Egyptian Pound`;
};
