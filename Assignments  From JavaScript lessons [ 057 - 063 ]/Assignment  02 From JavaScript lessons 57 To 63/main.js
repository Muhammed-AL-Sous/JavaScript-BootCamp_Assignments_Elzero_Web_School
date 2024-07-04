function calculate(firstNum, secondNum, operation = "add") {
  if (
    /*
    في حال قمنا بوضع قيمة افتراضية لنوع العملية هنا يجب ان نحدد نوع المتغيرات 
    */
    typeof firstNum === "number" &&
    typeof secondNum === "number" &&
    operation === "add"
  ) {
    console.log(`${firstNum + secondNum}`);
  } else if (operation === "subtract") {
    console.log(`${firstNum - secondNum}`);
  } else if (operation === "multiply") {
    console.log(`${firstNum * secondNum}`);
  }
  if (secondNum == undefined) {
    console.log(`Second Number Not Found`);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

// ========================================== //

// في حال لم نرد ان نعرف عن نوع المتغيرات و نعمل بالطريقة الطبيعية لا نحدد قيمة افتراضية لنوع العملية و نقوم كما يلي :

function calculate(firstNum, secondNum, operation) {
  if (operation === "add") {
    console.log(`${firstNum + secondNum}`);
  } else if (operation === "subtract") {
    console.log(`${firstNum - secondNum}`);
  } else if (operation === "multiply") {
    console.log(`${firstNum * secondNum}`);
  } else if (secondNum === undefined) {
    console.log(`Second Number Not Found`);
  } else {
    console.log(`${firstNum + secondNum}`);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

// ========================================== //

// Method Two

function calculate(firstNum, secondNum, operation) {
  if (secondNum === undefined) {
    console.log(`Second Number Not Found`);
  } else if (operation === undefined) {
    console.log(`${firstNum + secondNum}`);
  }
  switch (operation) {
    case "add":
      console.log(`${firstNum + secondNum}`);
      break;
    case "subtract":
      console.log(`${firstNum - secondNum}`);
      break;
    case "multiply":
      console.log(`${firstNum * secondNum}`);
      break;
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600
