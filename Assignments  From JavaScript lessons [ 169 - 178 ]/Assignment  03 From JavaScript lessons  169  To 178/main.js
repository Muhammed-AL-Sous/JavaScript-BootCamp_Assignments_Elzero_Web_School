let myRequest = new XMLHttpRequest();
myRequest.open("GET", "articles.json");
myRequest.send();
console.log(myRequest);

myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let mainData = JSON.parse(this.responseText);
    for (let i = 0; i < mainData.length; i++) {
      mainData[i].Section = "All";
    }
    console.log(mainData);
    let updatedData = JSON.stringify(mainData);
    console.log(updatedData);
  }
};
