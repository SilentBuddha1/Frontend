const user = {
    name : "Ramchandra",
    age : 24,
    address : "Dolakha",
    "is this true" : true,
}

console.log(user);

// Accessing properties

const property = "name";
const value = "Ramchandra";

const user1 = {
    [property] : value,
};

console.log(user1);