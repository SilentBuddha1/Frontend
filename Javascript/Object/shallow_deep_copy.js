let user = {
    name: "Ramchandra",
    age: 24
};

const objClone = Object.assign({}, user);

objClone.name = "Shyam";

console.log("Original Object:", user);
console.log("Cloned Object:", objClone);


let objClone2 = {...user};

objClone2.age = 30;

console.log("Original Object after spread operator clone:", user);
console.log("Cloned Object after spread operator clone:", objClone2);

let objClone3 = JSON.parse(JSON.stringify(user));

objClone3.name = "Krishna";

console.log("Original Object after JSON clone:", user);
console.log("Cloned Object after JSON clone:", objClone3);