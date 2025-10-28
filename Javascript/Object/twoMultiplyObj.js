// Create a function multiplyByTwo(obj) that multiply all numeric property values of nums by 2.

let nums = {
    a: 10,
    b: 20,
    c: "30",
    d: 40,
    e: "Hello",
}

multiplyByTwo(nums);

function multiplyByTwo(obj){
    for(let key in obj){
        if(typeof obj[key] === "number"){
            obj[key] = obj[key] * 2;
        }
    }
}

console.log(nums);