"use strict";
//Arrow Function
//use => this in an arrow function is an anomorous function 
//always use () before {} curly brackets when we want to assign an code
//function key workd will not use in arrow function 
() => {
    var num = 10;
    var num2 = 20;
    var result = num + num2;
    console.log(result);
}; // as it wi;; not give result because the function has no name and cant be called 
// so lets give ot some name 
// lets assume a variable to define a function 
// var alpha= ()=>{
//     var num=10;
//     var num2=20;
//     var result=num+num2;
//     console.log(result);
// }
//alpha()// now the function will run 
//lets try to give parameters
// var alpha=(num:number,num1:number)=>{
//     // var num=10;
//     // var num2=20;
//     var result=num+num1;
//     console.log(result);
// }
// alpha(100,30)
// arrow function can also return the value 
var alpha = (num, num1) => {
    // var num=10;
    // var num2=20;
    var result = num + num1;
    return result;
    console.log(result);
};
var results = alpha(100, 30);
results += 5;
console.log(results);
//short hand method of an arrow function 
var alpha = (num, num1) => num + num1;
alpha(30, 40);
var results = alpha(30, 40);
results += 5;
console.log(results);
console.log(typeof alpha);
