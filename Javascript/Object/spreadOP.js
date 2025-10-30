// Output

function getItems(fruits, favorite, ...args) {
    return [...fruits, ...args, favorite];
} 

console.log(getItems(['apple', 'banana'], 'mango', 'orange', 'pineapple'));