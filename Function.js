"use strict";
// simple method
function printconsole() {
    console.log(5.4);
}
console.log(1);
console.log(2);
printconsole();
console.log(3);
console.log(4);
//lets make function for sum
function Sum() {
    var num1 = 10;
    var num2 = 20;
    var sum = num1 + num2;
    console.log(sum);
}
Sum();
//lets take argument from user and use it again and again
function result(num1, num2) {
    var sum = num1 + num2;
    console.log(sum);
    return sum;
}
result(40, 70);
// one function can recieve unlimited parameters 
// using function in solving
var results = result(10, 20);
results = results + 5;
console.log(results);
