//  for(let i = 1; i <= 20; i++) {
//    console.log(i);
//  }

// for(let i = 0; i < 20; i++) {
//   console.log(i + 1);
// }

// for(let i = -1; i < 19); i++) {
//   console.log(i + 2)
// }

// for(let i = 20; i >= 1; i--) {
//   if(i % 2 === 0) {
//     console.log(i);
//   }
// }

// for(let i = 20; i >= 1; i = i - 2) {
//   console.log(i);
// }

// for(;;) {
//   console.log('I am printing...')
// }

//---------------Arrays--------------------

// let arr = []; //empty array

// let shoppingCart = ['iPhone 14', 'MacBook Pro', 'Cushion Cover', 'Cornitos Nachos - Cheese', 'Cornitos - Jalapeno', 5, true, undefined, null, [1,2,3,4], {}, function() {}];

//Accessing specific elements of an array

// console.log(shoppingCart[3]);
// console.log(shoppingCart[5]);

// console.log(shoppingCart.length);

// console.log(shoppingCart[shoppingCart.length - 1])
// console.log(shoppingCart[shoppingCart.length - 2])
// console.log(shoppingCart[shoppingCart.length - 3])

// shoppingCart[1] = "MacBook Air";

// console.log(shoppingCart);

// let arr = [];

// arr[0] = 1;
// arr[1] = "Hello";
// arr[2] = null;
// arr[3] = true;
// arr[4] = "Piotr";

// console.log(arr[1]);
// arr[4] = "Crio.Do";
// console.log(arr);

// let shoppingCart = ['iPhone 14', 'MacBook Pro', 'Cushion Cover', 'Cornitos Nachos - Cheese', 'Cornitos - Jalapeno', 5, true, undefined, null, [1,2,3,4], {}, function() {}];

// for(let i = 0; i < shoppingCart.length; i++) {
//   console.log(shoppingCart[i]);
// }

// console.log(true == "true")
// console.log(false == "false")
// console.log(false == "0")
// console.log(false == 0)
// console.log(true == 1)
// console.log(true == "1")

//------------------Array Referencing-------------

// const x = [1,2,3];
// // x[1] = 2000;
// // x = 2000;
// const y = x;
// // let y = [1,2,3]

// x[0] = 1000;

// console.log(x);
// console.log(y);

// let x = [1, 2, 3];
// let y = [1, 2, 3];
// console.log(x == y); //false

// let z = x;
// console.log(x === z);
// console.log(x == z);

let a = 5;

a = "a string"

//---------------Array methods------------------

// let arr = [1,2,3,4,5];

// //1. push() -> adds an element at the end of the array
// arr.push(6,7,8,9, 10 , 11);
// console.log(arr);

// //pop()
// arr.pop();
// arr.pop();
// arr.pop();
// console.log(arr);

// //3. unshift()

// arr.unshift(-2, -1, 0);
// console.log(arr)

// //4. shift()

// arr.shift()
// console.log(arr)

//---------------Activity-----------------

// let todoDB = [];

// function addTodo(item, priority) {
//   if(priority === 'high') {
//     todoDB.unshift(item);
//   } else {
//     todoDB.push(item);
//   }
// }

// addTodo('Do Crio Takehomes', 'high'); //['Do crio takehomes']
// addTodo('Watch Cricket', 'medium');//['Do crio takehomes', 'watch cricket']
// addTodo('Watch movie', 'low');
// addTodo('Revise JS', 'high');
// addTodo('Cook food', 'high');

// console.log(todoDB);

//-------------Truthy and Falsy values------------

//0, null, NaN, '', undefined, false

// let arr = [1, 0, null, true, false, undefined, 66, -1, []];

// for(let i = 0; i < arr.length; i++) {
//   if(!arr[i]) {
//     console.log(arr[i]);
//   }
// }

//---------------Sort method----------------

// let arr = ['Cricket', 'Table TEnnis', 'Lawn Tennis', 'Soccer', 'Football', 'Hockey', 'Swimming'];

// arr.sort();

// console.log(arr);

// let arr = [11, 5,4,21,56, 2];
// arr.sort()
// console.log(arr)

//-------------Reverse Method-----------------

// let arr = [1,2,3,4,5, -1];

// arr.reverse();
// console.log(arr);