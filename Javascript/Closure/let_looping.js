function a(){
	for(let i = 0; i < 5; i++){
		setTimeout(function log(){
			console.log(i);
		}, i * 1000);
	}
}
a();
