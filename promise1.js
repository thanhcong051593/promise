var promise = new Promise(function(resolve, reject){
		reject();
});

promise.then(function(){
	console.log("resolve");
})
.catch(function(){
	console.log("reject");
});

//kết quả in ra màn hình là reject 
