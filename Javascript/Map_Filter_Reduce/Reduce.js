const num = [1,2,3,4,5,6,7,8,9,10];

const sum = num.reduce((acc, curr, i, arr) => {
	return acc + curr;
},0);

console.log(sum);

// Polyfill For Reduce

Array.prototype.myReduce = function(cb, initialValue){
	var acc = initialValue;

	for(let i = 0; i < this.length; i++){
		acc = acc ? cb(acc, this[i], i,this): this[i];
	}
	return acc;
};

const Arr = [1,2,3,4,5];

const sum1 = Arr.myReduce((a,c) => {
	return a + c ;
},0);

console.log(sum1);
