function sum(a) {
    return function (b, c) {
        return a + b + c;
    };
}

const x = sum (5);
console.log(x(6,7));

console.log(sum(5)(6,7));