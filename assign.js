"use strict";
// length of rectangle
var length = 5;
var width = 12;
var area = length * width;
console.log(area);
//volume of cube 
//var a=prompt("enter your number");
//console.log(a)
var vol = 4;
console.log(vol ** 3);
// var userInput = prompt("Enter your input:");
// console.log("User input:", userInput);
//Write a program that checks if a given number is positive, negative, or zero.
var num = 9;
if (num % 2 == 0) {
    console.log("number is even");
}
else if (num == 0) {
    console.log("the number is zero");
}
else {
    console.log("numer is odd");
}
//Write a program that checks if a given number is positive, negative, or zero.
var num = 90;
if (num > 0) {
    console.log("number is psoitive");
}
else if (num < 0) {
    console.log("number is negative");
}
else {
    console.log("the number is zero");
}
//Write a program that determines if a person is eligible to vote based on their age.
var age = 20;
if (age >= 18) {
    console.log("eligibile for vote");
}
else {
    console.log("console.log");
}
//Write a program that calculates the result of a mathematical expression.	((10 + 5) * 3 - 2) / (4 % 3)  - 7)
var cal = ((10 + 5) * 3 - 2) / (4 % 3) - 7;
console.log(cal);
