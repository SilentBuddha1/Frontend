// IIFE : Immediately Invoked Function Expression is a function runs immediately after it is defined.
//
(function square(num){
	console.log(num * num);
})(5);

(function(x){
	return(function(y){
		console.log(x);
	})(2);
})(5);
