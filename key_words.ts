//mostly 3 ype of keyword use whiledefining the dta type in type script
//let 
//var
//const
//first talk for var 
//if we assign const to any number then there is estriction that we cant change the value again it will
//give the error at same time we can asssign value to let and can chnage the value 
let num4:number=60;
num4=30;
console.log(num4)// it will replace the value of num4
//now let work with const
//in constant we cant change the value 
const num5:number=60;
//num5=30;// as it will show roor it is not replace able
console.log(num5)
//local scope and global scope
// the methodss write with in the body {} called local scope 
// or if write outside of the body called global scope 
//global scope is parent while local scope is child
function print(){
    var local=60;
    console.log("function",num4)
}
print()// as we can see that from the gloval cope which is outside function we can use
//it in local scope inside pf function 
//but we cant use the variables in local scope to global scope it will called undefine 
// lets work with 
//if condition............. for local and  global scope.............
//block scope: it work as if we have a block and we assign value to it then it can run outside of {}
{
    var ifval=67;
}
console.log(ifval);// now we can access value to outside because there is no control if and only if it is 
//var assign
//lets said if it is let assign then 
{
    let ifval2=67;
}
//console.log(ifval2);// as we can see it shows error while runing
// as same for const 
//it also cant assign outside of block 
//it will shows an error
{
    const ifval5=67;
}
//console.log(ifval5); // as we can see it will also shows an error


