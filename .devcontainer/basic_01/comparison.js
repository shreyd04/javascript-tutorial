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