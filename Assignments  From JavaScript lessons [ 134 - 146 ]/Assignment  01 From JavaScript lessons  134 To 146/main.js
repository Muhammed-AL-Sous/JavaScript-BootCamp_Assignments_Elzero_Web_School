let ip = "2001:db8:3333:4444:5555:6666:7777:8888";

let re = /\d{4}:\w+\d:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/gi;

console.log(ip.match(re));
