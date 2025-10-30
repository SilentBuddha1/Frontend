let user = {
    name: "Ramchandra",
    age: 24
};

const objClone = Object.assign({}, user);

objClone.name = "Shyam";

console.log("Original Object:", user);
console.log("Cloned Object:", objClone);