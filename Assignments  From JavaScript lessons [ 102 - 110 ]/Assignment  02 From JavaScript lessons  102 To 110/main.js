let div = document.createElement("div");
let heading = document.createElement("h2");
let paragraph = document.createElement("p");

div.className = "parent";
div.style.cssText =
  "display : none; position:relative; background-color: #f5f3f4; width:500px; text-align:center; padding : 20px; margin:50px auto; font-family: thoma, arial;";

let headingText = document.createTextNode("Welcome");
heading.appendChild(headingText);
div.appendChild(heading);

let paragraphText = document.createTextNode("Welcome To Elzero Web School");
paragraph.appendChild(paragraphText);
div.appendChild(paragraph);

let closePopup = document.createElement("button");
div.appendChild(closePopup);
closePopup.style.cssText =
  "width:30px; height:30px; background-color: #fe0002;border: none; border-radius: 50%; position: absolute; top: -15px; right: -15px; display : flex ; justify-content : center ; align-items: center; cursor:pointer;";

let span1 = document.createElement("span");
let span2 = document.createElement("span");
closePopup.appendChild(span1);
closePopup.appendChild(span2);

span1.style.cssText =
  "display:block; width:15px; height : 2px ;background-color:white; transform:rotate(45deg) ; position: absolute;";

span2.style.cssText =
  "display:block; width:15px; height : 2px ;background-color:white; transform:rotate(-45deg) ; position: absolute;";

document.body.append(div);

let counter = setTimeout(creatPopup, 5000);

function creatPopup() {
  div.style.display = "block";
}

closePopup.onclick = function () {
  div.remove();
};
