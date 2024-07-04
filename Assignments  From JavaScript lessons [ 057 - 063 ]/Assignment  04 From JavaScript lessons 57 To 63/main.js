function checkStatus(a, b, c) {
  typeof a === "string"
    ? (userName = a)
    : typeof b === "string"
    ? (userName = b)
    : (userName = c);

  typeof a === "number"
    ? (age = a)
    : typeof b === "number"
    ? (age = b)
    : (age = c);

  typeof a === "boolean"
    ? (bool = a)
    : typeof b === "boolean"
    ? (bool = b)
    : (bool = c);

  let message = "";
  bool === true
    ? (message = "You Are Available For Hire")
    : (message = "You Are Not Available For Hire");
  console.log(`Hello ${userName} , Your Age Is : ${age} , ${message}`);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// ======================================================== //

// Method Two

function checkStatus(a, b, c) {
  let details = [a, b, c];
  for (let i = 0; i < details.length; i++) {
    if (typeof details[i] === "string") {
      a = details[i];
    } else if (typeof details[i] === "number") {
      b = details[i];
    } else if (typeof details[i] === "boolean") {
      c = details[i];
      if (c === true) {
        c = " You Are Available For Hire ";
      } else {
        c = " You Are Not Available For Hire";
      }
    }
  }
  console.log(`Hello ${a} , Your Age Is : ${b}, ${c}`);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

// ======================================================== //
