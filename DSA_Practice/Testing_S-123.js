// arr=["crio.do","is","the","best","platform","to","learn"];
// let str=arr.join("-");
// console.log(str);


// for (let i = 1; i <= 5; i++) {
//     console.log(i);
//     continue;
// }
// let x = 5;
// if (x > 3) {
//     console.log("x is greater than 3");
//     break;
// }

// function greet() {
//     var message = "Hello, world!";
//     console.log(message)
// }
// greet();
// console.log(message);
// var x;
// console.log(typeof(x));
// if (x === undefined) {
//     x = 5;
//     console.log(x);
// }

// var num = "42";
// var result = num + 2;
// console.log(typeof(result));  
// var x = 3;
// var result;
// switch (x) {
//     case 1:
//         result = "One";
//         break;
//     case 2:
//         result = "Two";
//         break;
//     default:
//         result = "Other";
//         break;
// } 
// console.log(result);

// a=[4,9,2,[3,5,7,[8,1,6]]];
// let sum=0;
// let n=3;

// for(let i= 0;i<n;i++){
// for (let j=0;j<n;j++){
// console.log(a[i][j]);
//     sum=sum+a[i][j]
//     console.log(sum)
// }
// }
// if(sum==15){
//     console.log("magic squre in row")
// Continue;
// sum=0;
// }
// else{
// break;
// console.log("not a magic Squre")
// }
// }

// let sum2=0;
// for(let j=0;j<n;i++){
// for (let i=0;i<n;j++){
// sum2=sum2+a[i][j]
// }
// if(sum==15){
//     console.log("magic squre in column")
// Continue;
// Sum2=0;
// }
// else{
// break;
// console.log("not a magic Squre")
// }
// }
// ----------------------------------------------------------------------------------
// let word="language";
// let arr=word.split("");
// let count=0;
//    for(let i=0;i<arr.length;i++){
//     // if(arr[i]==='l'){

//     // }
//      if( (arr[i]==='a')||(arr[i]==='e')||(arr[i]==='i')||(arr[i]==='o')||(arr[i]==='u')){
//        count++;
//      }
//     }
//     console.log(count);
// -------------------------------------------------------------------------------
// febanocai Series
// const num = 100;
// let x=0;
// let arr=[0,1];
// let y=1;
// let fn=x+y;
// // console.log(x);
// while(fn<num){
//     // console.log(fn);
//     fn=x+y;
//     x = y;
//     y = fn;;
// arr.push(y);
// }
// console.log(arr[6]);

// -----------------------------------------------------------------------
// let a=12345;
// let rem;
//     let even = 0;
//     let odd = 0;
//     let sum=0;
    
//     arr=[];
//     while (rem > 0) {
//         rem = a % 10;
//         arr.push;
//     }
//     for (let i = 0; i < arr.length; i++){
//         if (i % 2==0) {
//             even = sum + arr[i];
//         }
//         else {
//             odd = sum + arr[i];
//         }
//     }
//     console.log(even,odd);
    // return (even,odd);
//  row trevese
// let d1sum=0; let d2sum=0;
//     for(let i=0; i<n;i++){
//         target+=arr[0][i];
//     }
//     for(let i=0;i<n;i++){
//         let currrowsum=0; let currcolsum=0;
//         for(j=0;j<n;j++){
//             currrowsum+=matrix[i][j];
//             currcolsum+=matrix[j][i];
//             if(i==j){
//                 d1sum+=matrix[i][j];
//             }
//             if(i+j==n-1){
//                 d2sum+=matrix[i][j];

//             }
//             if(target!=currcolsum || target !=currrowsum){
//                 return "no";
//             }
//             if(target!=d1sum || target !=d2sum){
//                 return "no";
//             }
//                 return "yes";
            

//         }
//     }
    

    // column traverse
   
    // diagonal traverse
    // diagonal traverse

    // const fruits = [
    //     { name: 'apple', price: 2 },
    //     { name: 'banana', price: 1 },
    //     { name: 'orange', price: 3 },
    //   ];
    //   fruits.sort((a, b) => a.price - b.price);
      

    //   const fruits = [
    //     { name: 'apple', price: 2 },
    //     { name: 'banana', price: 1 },
    //     { name: 'orange', price: 3 },
    //   ];
    //   fruits.sort((a, b) => b.price - a.price);

    //   const fruits = [
    //     { name: 'apple', price: 2 },
    //     { name: 'banana', price: 1 },
    //     { name: 'orange', price: 3 },
    //   ];
    //   fruits.sort();

    //   const fruits = [
    //     { name: 'apple', price: 2 },
    //     { name: 'banana', price: 1 },
    //     { name: 'orange', price: 3 },
    //   ];
    //   fruits.sort((a, b) => a.name.localeCompare(b.name));

    // console.log(fruits);

//     const arr = [1, 2, 3];
// arr[10] = 10;
// console.log(arr.length);
// console.log(arr[5]);
// const arr = [1, 2, 3];
// arr[-2] = 0;
// console.log(arr.length);

// function linearSearch(arr, target) {
//     for (let i = 0; i <= arr.length; i++) {
//         if (arr[i] === target) {
//             console.log(i) ;
//         }
//     }
//     console.log(-1);
//  }
 
//  const myArray = [4, 2, 7, 1, 9];
//  const targetElement = 9;
//  const result = linearSearch(myArray, targetElement);
// ------------------------------------------------------------------
// 
// let word="language";
// // let arr =word.split("");
// let count=0;
// console.log(word);
//    for(let i=0;i<word.length;i++){
//        console.log(word[i]);
//      if( (word[i]==='a')||(word[i]==='e')||(word[i]==='i')||(word[i]==='o')||(word[i]==='u')){
//        count++;
//      }
//     }
//     console.log(count);
// //    return count;
// --------------------------------------------------------------------------------------------------------------
// returnung cyclic rotation of array 
// function reverse(arr,left,right ){
//     // run a while loop untill left<right 
//     while(left<right){
//         // swap the array value at array's left index to right index
//     let temp=arr[left];
//     arr[left]=arr[right];
//     arr[right]=temp;
//     // increment left by 1 and decrement right by 1
//     left++;
//     right--;
//     }
// }

//    let arr=[1,2,3,4,5];
//    let n=5;
//    let k=2;
  
//       // reducing the size of k 
//       k=k%n;
//       // call reverse for array (0,n-k-1)
//       reverse(arr,0,n-k-1);
//       // call reverse for array (n-k,n-1)
//       reverse(arr,n-k,n-1);
//       // call reverse for array (0,n-1)
//       reverse(arr,0,n-1);
//   // return the same input array 
//   console.log(arr);
  
// -------------------------------------------------------------------------------------------------------------
// function touppercase(c){
//     const ascai=c.charCodeAt(0);
//     return String.fromCharCode(ascai-32);
  
//   }
  
//   // TODO: Implement this method
//   function capitalise(paragraph) {
//     let n = paragraph.length;
//     let array=Array.from(paragraph);
//     for(let i=0;i<n;i++){
//     if(i==0 || array[i-1]==" " || array[i-1]=="."){
//       if(array[i]>='a' && array[i]<='z'){
//       array[i]=touppercase(array[i]);
//     }
//     }
//     }
//     return array.join("");
//   }

// ------------------------------------------------------------------------------------------------------------

// Binary search 
// function searchTarget(N,A,X) {
//     let l=0; let r = N-1;  
//     while(l<=r){
//         const mid=Math.floor((l+r)/2);
//         if(A[mid]==X)
//         return mid;
//     else if(X<A[mid])
//             r=mid-1;
//     else
//             l=mid+1;
//     }
//     return -1
// }
// -------------------------------------------------------------------------------------------------------------------
// fizz-buzz
// let N=100;
// for(let i=1;i<=100;i++){
    
//     if(i%3==0 && i%5==0){
//         console.log(" FIZZ-BUZZ")
//     }
//     else if(i%3==0){
//         console.log(" fizz")
//     }
//     else if(i%5==0){
//         console.log(" buzz")
//     }
//     else{
//         console.log(i);
//     }
// }

// ---------------------------------------------------------------------------------------------------------------------
//  pettern 
// let n=4;
// for(let i=1;i<=n;i++){
//     let row=' ';
//     for(let j=1;j<=i;j++){
//         row+='*'
//     }
//     console.log(row);
// }
// ----------------------------------------------------------------------------------------------------------------
// PRIME Number

// console.log(IsPrime(67));

// function IsPrime (num){
//     let factor=0;
// for(let i=2;i<num;i++){
//     if(num%i==0){
//         factor++;
//     }
// }
// if(factor==0){
//     return ("its a prime number");
// }
// else{
//     return ("its not a prime no ");
// }
// }
// =======================================================================================================
// sum of diviser

let n=3;
let sum=0;
for(let j=1;j<=n;j++){
for(let i=1;i<=j;i++){
    if(j%i===0){
        sum+=i;
    }
 }
}
console.log(sum);