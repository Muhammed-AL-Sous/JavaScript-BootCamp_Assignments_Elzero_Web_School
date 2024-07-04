function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    console.log(`${theAge} Years`);
    console.log(`${theAge * 12} Months`);
    console.log(`${theAge * (365 / 7)} Weeks`);
    console.log(`${theAge * 365} day`);
    console.log(`${theAge * (365 * 24)} Hours`);
    console.log(`${theAge * (60 * 24 * 365)} Minutes`);
    console.log(`${theAge * (60 * 60 * 24 * 365)} Seconds`);
  } else {
    console.log("%cAge Out Of Range", "color: red;");
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(26); // Months Example => 456 Months

// ============================================= //

// Method Two

function ageInTime(theAge) {
  let years = theAge,
    monthes = theAge * 12,
    weeks = (theAge * 365) / 7,
    days = theAge * 365,
    hours = theAge * 365 * 24,
    minutes = theAge * 365 * 24 * 60,
    secondes = theAge * 365 * 24 * 60 * 60; // We Can Also Calculate The Values To Variables And Add It Directly To Make It More Usful

  if (theAge > 10 && theAge < 100) {
    console.log(`${years} Years`);
    console.log(`${monthes} Months`);
    console.log(`${weeks} Weeks`);
    console.log(`${days} day`);
    console.log(`${hours} Hours`);
    console.log(`${minutes} Minutes`);
    console.log(`${secondes} Seconds`);
  } else {
    console.log("%cAge Out Of Range", "color: red;");
  }
}

ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
