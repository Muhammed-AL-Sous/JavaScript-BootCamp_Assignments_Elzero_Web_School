let chosen = 2;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

let a;
// i = chosen - 1  ==>  index start 0 not 1
for (i = chosen - 1; i < chosen; i++) {
  a = myFriends[i];
  let {
    title,
    age,
    available,
    skills: [, Two],
  } = a;

  if (available == true) {
    available = "Available";
  } else {
    available = "Not Available";
  }

  console.log(`Your Name Is : ${title}`);
  console.log(`Your Age Is : ${age}`);
  console.log(`Your State Is : ${available}`);
  console.log(`Your Last Skill Is : ${Two}`);
}
