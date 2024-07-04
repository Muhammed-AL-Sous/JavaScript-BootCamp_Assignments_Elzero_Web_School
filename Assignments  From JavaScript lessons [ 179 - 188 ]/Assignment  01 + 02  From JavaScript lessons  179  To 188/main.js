// Method One

// function getData(apiLink) {
//   return new Promise((resolve, reject) => {
//     let myRequest = new XMLHttpRequest();
//     myRequest.onload = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         let myData = JSON.parse(this.responseText);
//         resolve(myData);
//       } else {
//         reject(Error("No Data Found"));
//       }
//     };
//     myRequest.open("Get", apiLink);
//     myRequest.send();
//   });
// }

// getData("test.json")
//   .then((resolvedValues) => {
//     resolvedValues.length = 5;
//     return resolvedValues;
//   })
// .then((result) => {
//   for (let i = 0; i < result.length; i++) {
//     let div = document.createElement("div");
//     let header = document.createElement("h3");
//     let title = document.createTextNode(result[i].title);
//     header.appendChild(title);
//     div.appendChild(header);
//     let p = document.createElement("p");
//     let description = document.createTextNode(result[i].description);
//     p.appendChild(description);
//     div.appendChild(p);
//     document.body.appendChild(div);
//   }
// });

//=================================================//

// Method Two

// fetch("test.json")
//   .then((result) => {
//     let myData = result.json();
//     return myData;
//   })
//   .then((result) => {
//     result.length = 5;
//     return result;
//   })
// .then((result) => {
//   for (let i = 0; i < result.length; i++) {
//     let div = document.createElement("div");
//     let header = document.createElement("h3");
//     let title = document.createTextNode(result[i].title);
//     header.appendChild(title);
//     div.appendChild(header);
//     let p = document.createElement("p");
//     let description = document.createTextNode(result[i].description);
//     p.appendChild(description);
//     div.appendChild(p);
//     document.body.appendChild(div);
//   }
// });

//=================================================//

// Method Three

async function getData() {
  try {
    let mydata = await fetch("test.json");
    let lastData = await mydata.json();
    lastData.length = 5;
    for (let i = 0; i < lastData.length; i++) {
      let div = document.createElement("div");
      let header = document.createElement("h3");
      let title = document.createTextNode(lastData[i].title);
      header.appendChild(title);
      div.appendChild(header);
      let p = document.createElement("p");
      let description = document.createTextNode(lastData[i].description);
      p.appendChild(description);
      div.appendChild(p);
      document.body.appendChild(div);
    }
  } catch (reason) {
    console.log(Error(`No data Found ${reason}`));
  } finally {
    console.log("The Operation Is Done");
  }
}

getData();
