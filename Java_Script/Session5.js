// let arr = [1,2,3,4,5];

// for(let i = 0; i < arr.length; i++) {
//   if(arr[i] === 30) {
//     console.log('True');
//   }
// }

// //includes method

// console.log(arr.includes(1, 3));
// console.log(arr.includes(30));

//--------------Strings to Arrays - split() method-------

// let str = "Crio.Do is the best place to learn";

// let arr = str.split(" ");
// console.log(arr);
// let arr1 = str.split(".");
// console.log(arr1);
// let arr2 = str.split("");
// console.log(arr2);
// let arr3 = str.split();
// console.log(arr3);
// let arr4 = str.split('-');
// console.log(arr4);

//--------Arrays to Strings - join() method------------

// let arr = ['Crio.Do', 'is', 'the', 'best', 'place', 'to', 'learn'];

// let str = arr.join(" ");
// console.log(str);
// let str1 = arr.join(".");
// console.log(str1);
// let str2 = arr.join("");
// console.log(str2);
// let str3 = arr.join();
// console.log(str3);

//--------------Multidimensional Arrays---------------

// let arr = [1,2,3,4,5,[6,7,8]]

// let arr2 = [[1,2], [3,4]]

// let arr3 = [[1,2, [3,4,5]]];

// console.log(arr[5][1])
// console.log(arr3[0][2][1])
// console.log(arr3[0][2].includes(4))

// let arr = [[1,2], 3, 4];

// arr.push([]);
// console.log(arr);

// arr[3].push(5);
// console.log(arr);

// arr.pop();
// console.log(arr);

// let arr = [[1,2], [3,4], 5, 6];

// for(let i = 0; i < arr.length; i++) { //1
//   if(Array.isArray(arr[i])) {
//     for(let j = 0; j < arr[i].length; j++) { //0
//       console.log(arr[i][j]);
//     }
//   } else {
//     console.log(arr[i]);
//   }
// }

//------------------Activity------------------------

// const arr = [[0, 1], [2, 3], [4, 5]];

// function printArray(arr) {
//   for(let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr[i].length; j++) {
//       console.log(`[${i},${j}] = ${arr[i][j]}`);
//     }
//   }
// }

// printArray(arr);

//---------------JavaScript Objects----------------

// let arr = [];

// let obj = {}; //empty object

// //CRUD operations on an object

// //Creating an object

// //1. Object literal approach

let student = {
    name: "Rahul",
    class: 10,
    'date of birth': '12/06/2000',
    marks: [99,98,97,96,89],
    isTopper: true,
    duesRemaining: null,
    address: {
      plotNo: 770,
      streetAddress: 'XYZ Street',
      city: 'Bengaluru',
      state: 'Karnataka',
      pinCode: 560001,
      landmark: 'XYZ Landmark',
      anObj: {
        prop: "some value"
      }
    }
  }
  
  //2. Make an empty object and later add properties to it
  
  // let person = {};
  
  // //add properties
  // person.name = "Sam";
  // person.age = 51;
  // person.designation = "Software Engg. Manager";
  
  // console.log(person);
  
  //Reading values from properties of an object
  //1. Dot notation
  // console.log(student.name);
  // console.log(student.address.plotNo);
  // console.log(student.marks[2]);
  // console.log(student.date of birth);
  
  //2. Square Bracket Notation
  
  // console.log(student["name"]);
  // console.log(student["date of birth"]);
  // console.log(student.address["plotNo"]);
  // console.log(student["address"]["plotNo"]);
  
  //Updating values of properties in an object
  // student.address.plotNo = 772
  
  // console.log(student)
  
  //Deleting properties of an object
  // delete student.isTopper;
  // console.log(student)
  
  
  //hasOwnProperty
  
  // console.log(student.hasOwnProperty("name"));
  // console.log(student.hasOwnProperty("plotNo")); //false
  // console.log(student.hasOwnProperty("address"));
  
  
  // let obj = {
  //   1: "One"
  // }
  
  // console.log(obj['1']);
  // console.log(obj.1);
  
  //--------------Activity----------------------
  
  const person = {
    name: "Rahul",
    jobTitle : "SDE",
    email: "rahul@mail.com",
    isVerified: false
  }
  
  console.log(person.name)
  console.log(person.isVerified);
  
  person.isVerified = true;
  
  delete person.name
  
  person.firstName = "Rahul";
  person.lastName = "Sharma";
  
  console.log(person);
  
  function getFullName(firstName,middleName,lastName){
    // You only need to implement this function.
    return `${firstName} ${middleName} ${lastName}`;
  }