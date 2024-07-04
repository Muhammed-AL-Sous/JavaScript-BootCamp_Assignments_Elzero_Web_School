let btnCreate = document.querySelector("[name='create']");
let divResult = document.querySelector(".results");

btnCreate.onclick = function (e) {
  // عند الضغط على إنشاء العناصر إن اي عناصر قديمة تم إنشاؤها سوف يتم إزالتها أولا
  divResult.innerHTML = "";
  let ele = document.querySelector("[name='elements']").value;
  let btnText = document.querySelector("[name='texts']").value;
  let btnSelect = document.querySelector("select").value;

  let elements;
  let textElements;

  for (let i = 0; i < ele; i++) {
    elements = document.createElement(`${btnSelect}`);
    textElements = document.createTextNode(`${btnText}`);
    elements.appendChild(textElements);
    divResult.appendChild(elements);
  }

  e.preventDefault();
};
