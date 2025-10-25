//Solution

function evaluate(op) {
    if (op === 'sum') {
        return function (a) {
            return function (b) {
                return a + b;
            };
        }
    } else if (op === 'multiply') {
        return function (a) {
            return function (b) {
                return a * b;
            };
        }
    } else if (op === 'subtract') {
        return function (a) {
            return function (b) {
                return a - b;
            };
        }
    } else {
        return function (a) {
            return function (b) {
                return a / b;
            };
        }
    }
}

console.log(evaluate('sum')(5)(6));         // Output: 11
console.log(evaluate('multiply')(5)(6));    // Output: 30
console.log(evaluate('subtract')(5)(6));    // Output: -1
console.log(evaluate('divide')(5)(6));      // Output: 0.8333...3