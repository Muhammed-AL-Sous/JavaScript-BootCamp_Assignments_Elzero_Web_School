function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let name = [];
    for (let i = 0; i < zName.length; i++) {
      name += zName[i];
      if (i === zName.indexOf(" ")) {
        // عند الوصول الى الفراغ بين الاسم و الكنية
        i++; // انتقل الى الانديكس التالي
        name += zName[i]; // و قم بإضافته إلى المصفوفة
        break; // ثم توقف
      }
    }
    return `${name}`; // رجعلي المصفوفة
  }

  function ageWithMessage(zAge) {
    let age = parseInt(zAge);
    return ` Your Age Is : ${age}`;
  }

  function countryTwoLetters(zCountry) {
    let TwoLetters = [];
    for (let i = 0; i < zCountry.length; i++) {
      if (i === 2) {
        break;
      }
      TwoLetters += zCountry[i];
    }
    return `You Live In : ${TwoLetters.toUpperCase()} `;
  }
  function fullDetails() {
    let concat = `Hello ${namePattern(zName)} , ${ageWithMessage(
      zAge
    )} , ${countryTwoLetters(zCountry)} `;
    return concat;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
