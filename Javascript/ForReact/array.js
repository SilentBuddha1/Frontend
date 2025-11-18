// var arr = [1,2,3,4];

// var arr2 = arr;

// arr2.pop();

// console.log(arr2);

// console.log(arr);



// let state = [1,2,3,4];

// let copy = [...state]; //Destructuring by spread

// copy.pop();

// console.log(state);
// console.log(copy);

// var obj = {
//     name: "Ram",
//     age: 24,
// }

// let copyObj = {...obj};

// copyObj.name = "Hari";

// console.log(obj);

// console.log(copyObj);

//  const {age} = obj;

// console.log(`Age = ${age}`);

let obj = {
    name: "Ram",
    grade: "4th year",
    address: {
        temp: "Pokhara",
        permanent:"Dolakha",
    }
};

const {temp} = obj.address;

console.log(temp);


let arr = [12, function(){},13];

var [first, second,third] = arr;

console.log(first, second);

console.log(third);