let addInput = document.querySelector(".classes-to-add");
let removeInput = document.querySelector(".classes-to-remove");
let currentElement = document.querySelector("[title='Current']");

addInput.onblur = function () {
  let classAdd = addInput.value.toLowerCase();
  for (let i = 0; i < classAdd.split(" ").length; i++) {
    currentElement.classList.add(classAdd.split(" ")[i]);
  }
  addInput.value = "";
  showClass();
};

removeInput.onblur = function () {
  let classRemove = removeInput.value;
  for (let i = 0; i < classRemove.split(" ").length; i++) {
    currentElement.classList.remove(classRemove.split(" ")[i]);
  }
  removeInput.value = "";
  showClass();
};

function showClass() {
  document.querySelector(".classes-list").children[1].innerHTML = "";
  if (currentElement.classList.length > 0) {
    for (let i = 0; i < currentElement.classList.length; i++) {
      let span = document.createElement("span");
      let classText = document.createTextNode(currentElement.classList.item(i));
      span.appendChild(classText);
      document.querySelector(".classes-list").children[1].append(span);
    }
  } else {
    let noClass = "No Class To Show";
    document.querySelector(".classes-list").children[1].append(noClass);
  }
}
