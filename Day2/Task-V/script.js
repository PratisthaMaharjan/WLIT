const date = new Date();

console.log(date.__proto__);

// Exploring some functions.
console.log(date.toDateString());
console.log(date.toString());
console.log(date.toLocaleString());
date.setDate(21);
console.log(date.toString());
date.setMonth(10);
console.log(date.toString());
date.setFullYear(2004);
console.log(date.toString());
console.log(date.toUTCString());
console.log(date.getTimezoneOffset());