// var arr = [1,2,3,4];

// var arr2 = arr;

// arr2.pop();

// console.log(arr2);

// console.log(arr);



let state = [1,2,3,4];

let copy = [...state]; //Destructuring

copy.pop();

console.log(state);
console.log(copy);