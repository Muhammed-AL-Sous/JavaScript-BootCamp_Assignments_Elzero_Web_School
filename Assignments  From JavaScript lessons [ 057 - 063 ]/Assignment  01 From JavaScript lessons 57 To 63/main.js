function sayHello(theName, theGender) {
  if (theGender === "Male" || theGender === "male") {
    console.log(`Hello Mr ${theName}`);
  } else if (theGender === "Female" || theGender === "female") {
    console.log(`Hello Miss ${theName}`);
  } else {
    console.log(`Hello ${theName}`);
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

// ======================================= //

function sayHello(theName, theGender) {
  switch (theGender) {
    case "Male":
      console.log(`Hello Mr ${theName}`);
      break;
    case "Female":
      console.log(`Hello Miss ${theName}`);
      break;
    default:
      console.log(`Hello ${theName}`);
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

// ======================================= //

function sayHello(theName, theGender) {
  theGender === "Male"
    ? console.log(`Hello Mr ${theName}`)
    : theGender === "Female"
    ? console.log(`Hello Miss ${theName}`)
    : console.log(`Hello ${theName}`);
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

// ======================================= //

function sayHello(theName, theGender) {
  let name = [theName, theGender];
  for (let i = 0; i < name.length; i++) {
    if (name[i] === "Male") {
      console.log(`Hello Mr ${theName}`);
    } else if (name[i] === "Female") {
      console.log(`Hello Miss ${theName}`);
    } else if (name[i] === undefined) {
      console.log(`Hello ${theName}`);
    }
  }
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
