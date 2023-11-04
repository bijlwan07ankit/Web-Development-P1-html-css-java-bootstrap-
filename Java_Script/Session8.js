 //----------Global Scope-------------------

// let a = 5; //globally scoped variable

// console.log(a);

// function abc() {
//   console.log(a);
// }

// abc();

// if(true) {
//   console.log(a);
// }

//------------Local Scope--------------
// let message;

//1. Function Scope

// function dev() {
//   var message = "I am a message";
//   console.log(message);
//   // return message;
// }

// // const a = abc();

// console.log(message);

//2. Block Scope
// {
//   console.log("This is a block");
//   console.log("Another statement");
// }

// if(true) {
//   var a = 5;
//   console.log(a);
// }

// console.log(a);

// function abc() {
//   console.log(a);
// }

// abc();

// function test() {
//   for( i = 0; i<9; i++){
//     let a =10;
//   }

//   console.log(i);
// }

// test();

// function test() {
//   for( let i = 0; i<9; i++){
//     let a =10;
//   }

//   console.log(i);
// }

// test();

//--------------Lexical Scope------------------
// const globalVar = 4;

// function grandParent() {
//   const grandParentVar = 5;

//   function parent() {
//     const parentVar = 6;

//     function child() {
//       const childVar = 7;
//       console.log(childVar);
//       console.log(parentVar);
//       console.log(grandParentVar);
//       console.log(globalVar);
//     }

//       // console.log(childVar);
//       // console.log(parentVar);
//       // console.log(grandParentVar);
//       // console.log(globalVar);
//     child();
//   }
//   parent();
// }

// grandParent();

//----------------------Hoisting---------------------

// console.log(a);
// var a = 5;

// abc();

// function abc() {
//   console.log("I am a message");
// }

//---------------------Callback Functions-------------


// function callOwner() {
//   console.log("Take back the bike");
// }

// function askOwner() {
//   console.log("Sir, it is costing another 1000 bucks, would you like to continue ?");
// }

// function bikeRepair(func) {
//   console.log("Washing the bike");
//   console.log("Changing gears");
//   console.log("Changing brakes");

//   func();

//   // callOwner();
// }
// bikeRepair(callOwner);

// function sum(a, b) {
//   console.log(a + b);
// }

// function subtract(a, b) {
//   console.log(a - b);
// }

// function multiply(a, b) {
//   console.log(a * b);
// }

// function division(a, b) {
//   console.log(a / b);
// }

// function calculator(a , b, operation) {
//   operation(a, b);
// }

// calculator(9, 6, sum);
// calculator(9, 6, subtract);
// calculator(9, 6, multiply);
// calculator(9, 6, division);

//--------------Closures--------------------------

const globalVar = 4;

function grandParent() {
  const grandParentVar = 5;

  function parent() {
    const parentVar = 6;

    function child() {
      const childVar = 7;
      console.log(childVar);
      console.log(parentVar);
      console.log(grandParentVar);
      console.log(globalVar);
    }
    return child;
  }
  return parent;
}

const parentFunction = grandParent();
const childFunction = parentFunction();
childFunction();