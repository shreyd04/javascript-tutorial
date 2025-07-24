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

const newname = new String("jerry");
console.log(newname); // this is a string object, not a primitive string 
// it means it is stored in heap memory and used as a reference
console.log(newname.length); // accessing length property of string object