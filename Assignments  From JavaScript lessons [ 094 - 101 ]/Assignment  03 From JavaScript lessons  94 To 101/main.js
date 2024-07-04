let myP = document.querySelector("p");
myP.remove();

// ========================== //

let two = document.querySelector(".our-element");

// ========================== //

let one = document.createElement("div");
one.className = "start";
one.setAttribute("title", "Start Element");
one.setAttribute("data-value", "Start");
one.textContent = "Start";

two.before(one);

// ========================== //

// <div class="end" title="End Element" data-value="End">End</div>

let three = document.createElement("div");
three.className = "end";
three.setAttribute("title", "End Element");
three.setAttribute("data-value", "End");
let classText = document.createTextNode("End");
three.appendChild(classText);

two.after(three);
