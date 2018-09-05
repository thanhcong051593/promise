var promise = new Promise(function(resolve, reject){
		reject();
});

promise.then(function(){
	console.log("resolve");
})
.catch(function(){
	console.log("r");
});
