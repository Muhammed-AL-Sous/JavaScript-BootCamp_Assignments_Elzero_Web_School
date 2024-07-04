let numberOne = "10";
let numberTwo = "20";

// Normal Concatenate
console.log(numberOne + numberTwo);

// Normal Concatenate
console.log(typeof (numberOne + numberTwo));

// Template Literals Way
console.log(`${numberOne}${numberTwo}`); // Don't Forget BackTick

// Template Literals Way
console.log(typeof `${numberOne}${numberTwo}`);

// Normal Concatenate
console.log(numberTwo + "\n" + numberOne);

//   Template Literals Way
console.log(`${numberTwo}
${numberOne}`);
