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
   
function checkeven(a,b){
    if(a%2===0 && b%2===0){
      console.log(true);
    }
    else{
        console.log(false);

    }
}

const checkevenodd=(a,b)=>console.log((a%2===0 && b%2===0));
checkeven(2,8);
checkevenodd(2,8);