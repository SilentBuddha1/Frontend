const nums = [1,2,3,4,5];

// const multiply = nums.map((n) => n * n );

// console.log("Multiply : \n", multiply);
console.log(`Actual Array : \n ${nums}`);


//Polyfill for map 

Array.prototype.myOwnMap = function(cb) {
	let temp = [];
	for(let i = 0; i < this.length; i++){
		temp.push(cb(this[i], i, this));
	}
	return temp;
};

console.log(nums.myOwnMap((n)=> n * n));
