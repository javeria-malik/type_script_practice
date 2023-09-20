// async function waitOneSecond(): Promise<void> {
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//   }
// async function doSomethingAsync() {
//     await waitOneSecond();
//     console.log("One second has passed!");
//   }
  
//   // Call the `doSomethingAsync` function.
//   doSomethingAsync();
//   console.log("hello")
// console.log("before async code");
// function doSomething(){
//     console.log("print something");
    
// }
// setTimeout(doSomething,5000)


// console.log("after async code");
//through error function
// console.log("before async code");
// function doSomething(){
//     console.log("print something");
    
// }
// setTimeout(()=>{
//     console.log("hellooooo");
    
// },5000)


// console.log("after async code");
//use of set interval//did not stop
console.log("before async code");
function doSomething(){
    console.log("print something");
    
}
setInterval(()=>{
    console.log("hellooooo");
    
},5000)


console.log("after async code");







