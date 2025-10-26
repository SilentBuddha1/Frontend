function sum(a) {
    return function (b, c) {
        return a + b + c;
    };
}

const x = sum (5);
console.log(x(6,7));

console.log(sum(5)(6,7));


// Curring vs Partial Application

// Curring: Transforming a function that takes multiple arguments into a sequence of functions each taking a single argument.

// Partial Application: Fixing a certain number of arguments of a function, producing another function of smaller arity.

// Partial application helper (pre-fill leftmost arguments)
function partial(fn, ...presetArgs) {
    return function (...laterArgs) {
        return fn(...presetArgs, ...laterArgs);
    };
}

// Partial application helper (pre-fill rightmost arguments)
function partialRight(fn, ...presetRight) {
    return function (...leftArgs) {
        return fn(...leftArgs, ...presetRight);
    };
}

// 1) Pre-filling arguments for reuse (greeting)
function greet(greeting, firstName, lastName) {
    return `${greeting}, ${firstName} ${lastName}!`;
}
const sayHello = partial(greet, 'Hello');
console.log(sayHello('Ramchandra', 'Karki')); // "Hello, Ramchandra Karki!"

// 2) Creating specialized math functions
function multiply(a, b, c) {
    return a * b * c;
}
const timesTwo = partial(multiply, 2);
console.log(timesTwo(3, 4)); // 24

// 3) Using partial with array helpers to create reusable callbacks
const nums = [1, 2, 3];
const add = (a, b) => a + b;
const addFive = partial(add, 5); // pre-fill first arg
console.log(nums.map(addFive)); // [6, 7, 8]

// 4) Fixing configuration / dependencies (example: simple request factory)
function request(url, method = 'GET', headers = {}) {
    return { url, method, headers };
}
// Pre-fill headers on the right side using partialRight
const jsonRequest = partialRight(request, { 'Accept': 'application/json' });
console.log(jsonRequest('https://api.example.com/data', 'GET'));

// 5) Building more specific functions by partially applying other partials
const timesTwoThenThree = partial(timesTwo, 3); // sets a=2, b=3 => expects c
console.log(timesTwoThenThree(5)); // multiply(2,3,5) => 30

// 6) When binding methods that need correct `this`, prefer Function.prototype.bind
const logger = {
    prefix: '[INFO]',
    log(prefix, message) {
        console.log(prefix, message);
    }
};
// Using bind to preserve `this`
const info = logger.log.bind(logger, logger.prefix);
info('Server started'); // "[INFO] Server started"