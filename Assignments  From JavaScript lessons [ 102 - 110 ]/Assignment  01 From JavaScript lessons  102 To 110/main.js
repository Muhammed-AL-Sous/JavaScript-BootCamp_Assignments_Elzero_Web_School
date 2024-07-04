let num = window.prompt("Print Number From To ", `Example: 5-20`);

num = num.split("-").sort();

let num1 = +num[0].trim();
let num2 = num[1].trim();

for (let i = num1; i <= num2; i++) {
  let div = document.createElement("div");
  document.body.append(div);
  div.innerHTML = i;
}
