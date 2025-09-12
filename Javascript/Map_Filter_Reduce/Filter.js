const numArr = [0,1,2,3,4,5,6,7,8,9,10];

const oddNumArr = numArr.filter((n) => n%2!=0);

const evenNumArr = numArr.filter((n) => n%2==0);

console.log(`Actual Arrary : \n${numArr}`);

console.log(`Odd Number Array : ${oddNumArr}`);

console.log(`Even Number Array :  ${evenNumArr}`);


// Polyfill For Filter

Array.prototype.myfilter = function(cb){
	let temp = [];
	
	for(let i = 0; i < this.length; i++){
		if(cb(this[i],i,this))
			temp.push(this[i])

	}
	return temp;
};

const newNum = [1,2,3,4,5];

const Arr = newNum.myfilter((n) => n > 2);

console.log(Arr);


