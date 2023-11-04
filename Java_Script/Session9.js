 // let arr = [1,2,3,4,5];

// for(let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for(let i = 0; i < arr.length; i+=2) {
//   console.log(arr[i]);
// }

//----------------Foreach method---------------

// const result = arr.forEach((element, index, array) => {
//   if(index % 2 === 0) {
//     console.log(element);
//   }
// });

// console.log(result);

//------------------Find method----------------

//  let arr = [1,2,3,4,5,3];

// // console.log(arr[2])

// const result = arr.find((element) => element === 3);
// console.log(result);

//---------------Sort method-------------------------

// let arr = ['Cricket', 'Football', 'Athletics', 'Gym', 'Hockey', 'Lawn Tennis', 'Archery'];

// arr.sort();

// console.log(arr);

// const numsArr = [14,100,11,10001,123,1201,12001, 14];
// numsArr.sort((a, b) => b - a);
// console.log(numsArr);

//--------------Activity----------------------

// const array = [
//   {
//     name: "Kevi",
//     age: 25,
//   },
//   {
//     name: "Arnold",
//     age: 6,
//   },
//   {
//     name: "Sheila",
//     age: 56,
//   },
// ];

// array.sort((a,b) => a.age - b.age);
// console.log(array);

// array.forEach((element) => console.log(element.name));

//---------------------Map method----------------------

// let arr = [10,30, 50];

// // let arrDouble = [];

// // arr.forEach((element) => arrDouble.push(element * 2));
// // console.log(arrDouble);

// let arrDouble = arr.map((element) => element * 2);

// console.log(arrDouble);

//------------------Activity---------------------

// let arr = [1,2,3];

// let areas = arr.map((radius) => Math.PI * radius * radius ).filter((area) => area > 10);
// console.log(areas);

//-------------Filter method---------------

// let greaterThanTen = areas.filter((element) => element > 10);
// console.log(greaterThanTen);

//-------------Reduce method----------------------

// let arr = ['one', 'two', 'three'];

// const result = arr.reduce((total, element) => total += element.length);

// console.log(result);

// //'one' + 3 = 'one3' + 5 = 'one35'

//-----------------Splice method---------------------

//1. Delete n number of elements

// let arr = [1,2,3,4,5,6,7,8,9,10];

// const result = arr.splice(3, 4);
// console.log(result);
// console.log(arr);
// arr.splice(0, 2);
// arr.splice(8, 5);
// arr.splice(8);
// console.log(arr);

//2. Insert n number of elements

// arr.splice(6, 0, 60, 61, 62, 63, 64, 100, 1);
// console.log(arr);

//3. Replacing n number of elements
// arr.splice(3, 3, 40, 50, 60, 70, 80, 90);
// console.log(arr);

//--------------------slice method-----------------

// let arr = [1,2,3,4,5];

// let newArr = arr.slice(1,4);
// console.log(newArr);


