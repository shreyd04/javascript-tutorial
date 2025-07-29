console.log(null == 0);

let userOne = {
    userId: "1234@gmail.com", // this is heap memory
    userNo:  4
}
console.log(userOne.userId); // accessing object property

let userfunc = userOne;
userfunc.userId = "abc";
console.log(userOne.userId); // accessing object property after modification
const name  = "j";
const repc = 1;
console.log(name + repc + "only"); // string concatenation
// but in modern day we use string interpolation wherewe make
//placeholders to keep the string in a single line
console.log(`hell0 ${name} my repocount is ${repc}`); // string interpolation
// this is a template literal, it is a new feature in ES6
// `` these are called as backticks
console.log(name[0]);

const newname = new String("jerry-y");
console.log(newname); // this is a string object, not a primitive string 
// it means it is stored in heap memory and used as a reference
console.log(newname.length); // accessing length property of string object
 
console.log(newname.indexOf('y'));

// slicing newname string object and to store it in the variable
// const newest will be used to store the sliced string
const newest =  newname.substring(0,4);
// here the last 4th element won't be printed
const anotherString = newname.slice(-8,4);//this means it will start from the end to the 4th element
console.log(newest);
const newStringOne = "   jerry   ";
console.log(newStringOne.trim());//this removes the garbage spacesin the string
console.log(newStringOne.trimStart());
const url = "https://www.google%20.com";

// now to make this searchable we need to encode the url
console.log(url.replace("%20"," " ));
console.log(url.includes("google")); // this checks if the string contains google
console.log(url.split("/"));// this splits the stri g in array of the basis of /


//ecommerece websites using this syntax

const score = 100;
const newScore = new Number(score); // this is a number object, not a primitive number
console.log(newScore); // it is stored in heap memory and used as a reference

const balance = 1000.3;
console.log(balance.toFixed(2));// this will print the number with 2 decimal 
console.log(balance.toPrecision(3)); // this will print the number with 3 significant digits
