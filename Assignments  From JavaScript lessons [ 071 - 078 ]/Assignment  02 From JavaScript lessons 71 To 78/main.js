let myString = "EEEEEEElllzzzzzzzeeeeeeerrrrrooooooooo";

let newArray = myString
  .split("")
  .filter(function (el, index, arr) {
    return arr.indexOf(el) === index; // عم قله رجعلي من المصفوفة الحرف اللي مساوي الانديكس تبعه يعني
    // E INDEX = 0 , L INDEX = 7 , Z INDEX = 10 , ....
    // لح يتكون عندي مصفوفة هالمصفوفة بدي انا منه يشوف عنصر عنصر هالعنصر لما ابحث عنه لازم يكون له انديكس
    // كاني قلتله شفلي حرف ال
    // E
    // شو الانديكس تبعه لح يقلي صفر خده ع جنب برجع بختبر نفس الحرف لح يجبلي صفر لانو خزن اول قيمة
    // بالتالي هو بياخد اول قيمة و بخزنها و بينتفل لحرف جديد
  })
  .join("");

console.log(newArray);

// Elzero

let m = "muhhhhhhammhed";

console.log(m.indexOf("h")); // 2
console.log(m.indexOf("h")); // 2

// سيتم أخذ أول حرف من كل الحروف المكررة و سيتجاهل الحروف المكررة
