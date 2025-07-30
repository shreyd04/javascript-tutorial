// Dates is an object inside js

const date = new Date();
console.log(date.toString());
console.log(date.toLocaleString());
 
const date1 = new Date( 2023, 0, 2);
console.log(date1); // January is 0 in js
console.log(date1.toLocaleString()); // this will print the date in local format
console.log(date1.getFullYear()); // this will print the year
console.log(date1.getMonth()); // this will print the month (0-11)
console.log(date1.getDate()); // this will print the date (1-31)

// mostly the time stamps are used in the hotels software
let timestamp = Date.now();
let timestamp1 = Date.now();// this will give the timestamp in milliseconds
console.log(timestamp); 
console.log(timestamp1);
console.log(timestamp.getTime());// this will print the timestamp in milliseconds