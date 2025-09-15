// Data Privacy :You can hide variables from the global scope

function secret(){
	let Pw = "12345";
	return {
		getPw :() => Pw
	};
}

const user = secret();
console.log(user.getPw());
