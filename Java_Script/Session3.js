//  let a = 5;
// let b = 6;
// let c = 7;

// //If-else chaining---------------------------

// if(a > b && a > c) {
//   console.log("a is the greatest");
// } else if(b > a && b > c) {
//   console.log("b is the greatest");
// } else {
//   console.log("c is the greatest");
// }

//---------------Nested if-else---------------

// let firstRound = false;
// let secondRound = false;
// let thirdRound = false;

// if(firstRound === true) {
//   console.log("Congratulations, you have cleared the first round");

//   if(secondRound === true) {
//     console.log("Great, cleared the second round as well");

//     if(thirdRound === true) {
//       console.log("Congrats, all rounds cleared");
//     } else {
//       console.log("Missed by a mark");
//     }
//   } else {
//     console.log("Sorry, second not cleared");
//   }
// } else {
//   console.log("Sorry, you couldn't clear the first round");
// }

//---------------Strings--------------------

// let str = ""; //empty string
// let str1 = "a";
// let str2 = "Crio.Do is the best place to learn";
// let str3 = 'this is also a string'

// let str = "Crio.Do is";

// console.log(str.length);
// console.log("".length)

//Access specific string characters

// let str = "Crio.Do";

// //1. Square bracket notation
// console.log(str[4])
// console.log("Crio.Do"[4])

//2. charAt method
// console.log("Crio.Do".charAt(4))

// let num = 53

//------------String Immutability-----------

// 'use strict'

// let str = "Bob";
// str[0] = "J"; //updating specific character of a string //not allowed
// str = "Job"; //Simple re-assignment
// console.log(str)

//---------------------------------------

// let str = 'He said, "How are you"';
// console.log(str);

// let str = "I am a single quote(') and I am a double quote(\"\"), and I am a backslash (\\\\) \n This is a new line and this is a \t tabspace";
// console.log(str);

//-----------Template Strings----------------------

// let str = `This is a double quote ("") and this is a single quote('')
// this is a new line  and this is a   tab`;
// console.log(str);

let name = `Rahul`;
console.log(name.length);
let last4digits = "9876";
let contactNumber = 9876543210;

 console.log("Dear " + name + " Welcome to HDFC Bank, you have successfully opened your bank account with last 4 digits being " + last4digits + " Your registered number with us is " + contactNumber + " and the sum of 2 + 2 is " + 4);

console.log(`Dear ${name}, Welcome to HDFC Bank, you have successfully opened your bank account with last 4 digits being ${last4digits}, your registered number with us is ${contactNumber}, and the sum of 2 + 2 is ${2 + 2}`);





