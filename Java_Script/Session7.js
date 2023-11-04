 //-------------------Math Object---------------

//1. trunc() method

// console.log(Math.trunc(303.3 * 3))
// console.log(Math.trunc(34.99))
// console.log(Math.trunc(34.01))

//2. round() method

// console.log(Math.round(303.3 * 3))
// console.log(Math.round(34.99))
// console.log(Math.round(34.01))
// console.log(Math.round(34.50))

// console.log(Math.round(46.8759434334 * 1000) / 1000)

//3. floor() method

// console.log(Math.floor(303.3 * 3))
// console.log(Math.floor(34.99))
// console.log(Math.floor(34.01))
// console.log(Math.floor(34.50))

// console.log(Math.floor(46.99))
// console.log(Math.floor(-46.99))

// console.log(Math.trunc(46.99))
// console.log(Math.trunc(-46.99))

//4. ceil() method

// console.log(Math.ceil(303.3 * 3))
// console.log(Math.ceil(34.99))
// console.log(Math.ceil(34.01))
// console.log(Math.ceil(34.50))

//5. min() method
// console.log(Math.min(45,23,65,24,75,23,64));

// //6. max() method
// console.log(Math.max(45,23,65,24,75,23,64));

// console.log(Math.floor(100000 + Math.random() * 900000))

// function example(n) {
//   console.log(n);
// }


// const n = 10;
// example(n);

//---------------Arrow Functions---------------------

//1. Function Declaration Syntax

// function funcName() {
  
// }

// funcName()

// //2. Function Expression Syntax

// const a = function () {
//   console.log()
// }
// a()

//3. Arrow Functions Syntax

// const arrowFn = () => {
//   console.log()
// }

// function add(a,b) {
//   return a + b;
// }

// const add = (a,b) => a + b;


// const printFormatting = () => {
//   console.log("Hello");
//   console.log("-------------------------");
//   console.log("++++++++++++++++++++++++++++");
// }

// const printHello = () => console.log("Hello world");

// // const add = (a,b) => {
// //   return a + b;
// // }

// const result = add(5,6);
// console.log(result)

// const multiplyByTen = (a) => console.log(a * 10);
// const multiplyByTen = () => console.log(a * 10);

// multiplyByTen(20);

// function checkEven(a, b) {
//   // if(a % 2 === 0 && b % 2 === 0) {
//   //   return true;
//   // } else {
//   //   return false;
//   // }
//   return a % 2 === 0 && b % 2 === 0;
// }

// const arrowCheck = (a,b) => a % 2 === 0 && b % 2 === 0;

//----------------------Pass By Value----------------

// const str = "Crio.Do";

// function updateString(str) {
//   str = "Crio-Do";
// }

// updateString(str);

// console.log(str);


//--------------Pass By Reference--------------------

// const obj = {
//      name:  "Jhon"
// }
// function changeName(obj){
//     obj.name = "Doe";
// }
// console.log("Object before function call");
// console.log(obj.name);
// changeName({...obj});
// console.log("Object after function call");
// console.log(obj.name);


// let x = [1,2,3]
// let y = x;

//---------Spread Operator--------------------

// const obj = {
//      name:  "Jhon"
// }
// // const copy_obj = obj;
// const copy_obj = {...obj};

// copy_obj.name = "Doe";

// console.log(obj.name);

// const arr = [1,2,3,4,5];

// const newArr = [...arr];
