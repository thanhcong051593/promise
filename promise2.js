var promise = new Promise(function(resolve, reject){
		resolve();
});

promise.then(function(){
	console.log("resolve");
})
.catch(function(){
	console.log("reject");
});

//in ra màn hình là resolve
