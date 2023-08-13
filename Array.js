"use strict";
//array
//use pf pop  require no argument 
//use of push  reuire an argument 
let names = ["humaira", "javeria", "arooj", "noor"];
console.log(names);
// get a value from specific value of index
console.log(names[1]);
//get a list 
console.log(names[1], names[0], names[2]);
// add the value of array
let roll_no = [40, 39, 20];
let sum = roll_no[2] + roll_no[1];
console.log(sum);
console.error(); //use to find the errroe
//console.warn() use to find the warning
//use push
console.log("before add", names);
names.push("aisha");
console.log("after add with push", names);
//pop function will remove last value 
console.log("before remove ", names);
names.pop(); // will remove aisha 
console.log("after remove ", names);
// unshift("anu argumnet") use to add value in starting of an array 
names.unshift("zoya");
console.log("After adding through unshift", names);
//use of shift() use to add any value from starting of an index
console.log("array before shift()", names);
names.shift();
console.log("after using the shift() method", names);
//use of splice at specific value remove the value 
console.log("splice function");
console.log("method before using splice ", names);
names.splice(1, 0, "JM"); // first argument will give at which imdex it want to add second how much wamt to remove and the thirs one guve the value 
console.log("after using the splice function", names);
// use length function
console.log(names.length);
//length=last index+1//vice versa use for finding the last index
//use of name.lnegth in method
let count = ["javeria", "arooj", "bisma", true, false, 20, 40];
count.splice(count.length - 3, 0, "success");
console.log(count);
