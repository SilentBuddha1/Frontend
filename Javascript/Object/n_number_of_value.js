// Curring is the functional programming technique where a function with multiple args is transformed into a sequence of functions each taking one arg at a time.
//
// n number of arg to sum
//

function add(a){
	return function (b){
		if (b) return add(a +b);
		return a;
	};
}

console.log(add(5)(2)(5)(10)());
