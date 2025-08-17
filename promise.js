//promise is an object
//so we will make a new instance
const promiseOne = new Promise(function(resolve , reject){
    //Do an async task , DB calls , crptograpgy , network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve();
    }, 1000);
});
//resolve is linked with then but to connect then and resolve we need to call a function called resolve
promiseOne.then(function(){
     console.log("Promise consumed");
})