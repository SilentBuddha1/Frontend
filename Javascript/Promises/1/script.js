// //Synchronous JavaScript Example
// console.log("Hello, World!");

// console.log("This is a sample JavaScript file.");

// console.log("It demonstrates basic logging functionality.");


// //Asynchronous JavaScript Example 

// setTimeout(() => {
//     console.log("This message is displayed after a delay.");
// }, 1000);

// console.log("This message is displayed immediately.");


// //Callback

// function callBack(name, cb) {
//     setTimeout(() => {
//         cb(`Name= ${name}`);
//     }, 1000);
//     console.log("Running...");
// }

// const message = callBack("Ramchandra", function (msg){
//     console.log(`${msg}\nDone...`);
// })


//Promises

// console.log("Start");

// const sub = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const result = true;
//         if(result){
//             resolve("Done");
//         }
//             else reject(new error("Cancelled"));
//     }, 2000);

// });

// sub.then((res) =>{
//     console.log(res);

// }).catch((err)=>{
//     console.log(err);
// })

// console.log(sub);

// console.log("Stop");

const Pro= Promise.resolve("Continue...");

console.log(Pro);

Pro.then((res) => {
    console.log(res);
})