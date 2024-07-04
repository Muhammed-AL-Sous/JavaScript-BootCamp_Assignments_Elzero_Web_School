function specialMix(...data) {
  let num = 0;
  for (let i = 0; i < data.length; i++) {
    if (parseInt(data[i])) {
      num += parseInt(data[i]);
    }
  }
  // بعد انتهاء الحلقة نتأكد من وجود سلسة حرفية فقط
  if (num === 0) {
    num = "All Is Strings";
  }
  return num;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
