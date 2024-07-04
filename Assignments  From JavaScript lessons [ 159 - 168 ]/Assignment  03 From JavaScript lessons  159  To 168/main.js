let dateNow = new Date();
dateNow.setFullYear(2022);
dateNow.setMonth(4);
dateNow.setDate(0);
console.log(dateNow);

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let preMonth = months[dateNow.getMonth()];
console.log(
  `"Previous Month Is ${preMonth} And Last Day Is ${dateNow.getDate()}"`
);
