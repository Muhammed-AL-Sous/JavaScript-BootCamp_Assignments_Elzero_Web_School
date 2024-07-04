let num = 110;

if (num < 10) {
  console.log(`00${num}`);
} else if (10 < num && num < 100) {
  console.log(`0${num}`);
} else if (num >= 100) {
  console.log(`${num}`);
} else {
  console.log(`${Unknown}`);
}
