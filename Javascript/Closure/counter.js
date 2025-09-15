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

c.add(5);
c.add(10)

console.log(c.retrive());
