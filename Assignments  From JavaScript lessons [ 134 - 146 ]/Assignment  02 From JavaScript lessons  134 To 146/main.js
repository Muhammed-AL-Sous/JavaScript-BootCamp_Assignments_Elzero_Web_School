let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

let specialNamesRe = /os\d*o/gi;

console.log(specialNames.match(specialNamesRe));

// Output
// ['Os10O', 'OsO', 'Os100O']
