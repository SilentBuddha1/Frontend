function counter(){
	var _counter = 0;

	function add(increment){
		_counter += increment;
	}
	
	function retrive(){
		return "Counter = " + _counter;
	}

	return {
		add,
		retrive,
	};
}

const c = counter();

/*let n = parseInt(prompt("How many number do you want to add?"));

for(let i = 0; i < n; i++){
	let value = parseInt(prompt(`Enter number ${i + 1} :`));
	c.add(value);
}
*/
c.add(5);
c.add(10)

console.log(c.retrive());
