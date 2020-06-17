/*let promise = new Promise(function(resolve,reject){
let a =1+2;
if(a==3){
    resolve('Success')
}else{
    reject('Failed')
}
})  

promise.then((message) => {
console.log('This is in the then '+message)
}).catch((message) =>{
    console.log('This is in the catch '+ message)
}) */



let promise = new Promise(function(resolve,reject){
setTimeout(() => resolve("done"),1000);
});

promise.then(
  result => alert(result),
  error => alert(error)
)