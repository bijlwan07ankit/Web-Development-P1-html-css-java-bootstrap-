// let a=[1,2,3];
// let b=[1,2,3];
// if(a==b){
//     console.log("A and B are equal in values");
// }
// else if(a===b){
//     console.log("they share different memory location");
// }
// else{
//    console.log ("tumse naho payega beta!");
// }
// let n="5";
// n.padstart(5,"0");
// console.log(n);

// ---------------------------------------------------------------------------------------------
// let num=132456;
// console.log(numbetToBinary(n));
// arr = [];
//     let EvenSum = 0;
//     let OddSum = 0;
//     while (num > 0) {
//         rem = num / 10;
//         num % 10;
//         arr.push(rem);
        
//     }
//     console.log(arr);


    
    // }
    // arr.Reverse;
    // console.log(arr);
    // function generatePascalTriangle(row, col) {
    //     if (col === 0 || col === row) return 1;
    //     return generatePascalTriangle(row - 1, col - 1) + generatePascalTriangle(row - 1, col);
    //   }
      
    //   const result = generatePascalTriangle(5, 2);
    //   console.log(result);


//  using  normal function declararion 
//   function add(a,b){
//     console.log(a+b);
//   }
//   using arrow function 
//    const add2=(a,b)=>console.log(a+b);
// add(2,3);
// add2(2,3);
   
// function checkeven(a,b){
//     if(a%2===0 && b%2===0){
//       console.log(true);
//     }
//     else{
//         console.log(false);

//     }
// }

// const checkodd=(a,b)=>console.log((a%2!=0 && b%2!=0));
// checkeven(2,8);
// checkodd(2,8);

// -------------------------------------------------------------------
// mock Test 

// let a="Java is great Grails is also great";
// let arr=a.split(" ");
// console.log(arr.length);

// function addMatrices(matrix1, matrix2) {
//     const resultMatrix = [];
  
//     // Check if matrices have the same dimensions
//     if (matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length) {
//       console.log("Matrices must have the same dimensions for addition.");
//       return null;
//     }
  
//     // Iterate through rows
//     for (let i = 0; i < matrix1.length; i++) {
//       const row = [];
//       // Iterate through columns
//       for (let j = 0; j < matrix1[i].length; j++) {
//         // Add corresponding elements
//         row.push(matrix1[i][j] + matrix2[i][j]);
//       }
//       // Add the row to the result matrix
//       resultMatrix.push(row);
//     }
  
//     console.log(resultMatrix);;
//   }
  
//  const globlevar=5;
//  function grandparent(){
//     const grandparentvar=6;
//     function parent(){
//         const parentvar=7;
//         // console.log(childvar);  cant acsess
//             console.log(parentvar);   //can 
//             console.log(grandparentvar);    //can 
//             console.log(globlevar);  //can
//         function child(){
//             const childvar=8;
//             console.log(childvar);
//             console.log(parentvar);
//             console.log(grandparentvar);
//             console.log(globlevar);
//         }
//         child();
//     }
//     parent ();
//  }
//  grandparent();