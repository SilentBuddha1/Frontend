// Function Declaration

function square(num){
	return num * num;
}

console.log(square(5));
console.log(square(10));


//First Class Function :function that is treated like any other variable


function display(fn){
	console.log(`Square is ${fn(6)}`);
}

display(square);
