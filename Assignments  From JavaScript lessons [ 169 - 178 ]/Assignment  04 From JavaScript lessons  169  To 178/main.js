let myRequest = new XMLHttpRequest();
myRequest.open("GET", "articles.json");
myRequest.send();
console.log(myRequest);

let mainDiv = document.createElement("div");
mainDiv.id = "data";

myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let lastUpdateData = JSON.parse(this.responseText);

    for (let i = 0; i < lastUpdateData.length; i++) {
      console.log(lastUpdateData);
      let div = document.createElement("div");
      let title = document.createElement("h2");
      let head = document.createTextNode(lastUpdateData[i].title);
      title.appendChild(head);
      div.appendChild(title);

      let p1 = document.createElement("p");
      let artCont = document.createTextNode(lastUpdateData[i].content);
      p1.appendChild(artCont);
      div.appendChild(p1);

      let p2 = document.createElement("p");
      let writer = document.createTextNode(lastUpdateData[i].writer);
      p2.appendChild(writer);
      div.appendChild(p2);

      let p3 = document.createElement("p");
      let section = document.createTextNode(lastUpdateData[i].section);
      p3.appendChild(section);
      div.appendChild(p3);

      mainDiv.appendChild(div);
      document.body.appendChild(mainDiv);
    }
  }
};
