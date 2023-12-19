// let promise = new Promise((resolve,reject)=>{
//     console.log("I am a promise"); 
//     resolve("sucsess");
// })
 
function getData(dataId,getNextData){
    return new promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Data", dataId);
            resolve("Sucsess");
            if(getNextData){
                getNextData();
                }
            },2000);
        });
    }








// function getData(dataId,getNextData){
//     setTimeOut(()=>{
//         console.log("Data", dataId);
//         if(getNextData){
//             getNextData();
//         }
//     },2000);
// }




// console.log("one");
// console.log("TWO");
// setTimeout(()=>{
//     console.log("Hello");},4000);

// console.log("Three");