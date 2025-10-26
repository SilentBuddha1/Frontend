function c(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        }
        return function(...next) {
            return curried(...args, ...next);
        }
    }
}

const sum = (a, b, c) => a + b + c;

const curriedSum = c(sum);

console.log(curriedSum(1)(2)(3)); 
console.log(curriedSum(1, 2)(3)); 
console.log(curriedSum(1, 2, 3));

console.log(sum(1, 2, 3));  //sum(1,2) = NAN
