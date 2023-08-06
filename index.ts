//operators
//variables
//conditions 
//logical operator 
//var result:boolean=!(true);
//comprison logical operator lawys generate boolean 
//var result1:boolean=!(5<3||7>8)
//if we use or , and operators in same function it will run as first come first solve .........
//it will run only those block of code .. which is true 
 //blocking of code using {} brackets 
if(false){ 
    console.log("first print");
}
 if(true){
    console.log("second print");
}
if(false){
    console.log("second print");
}
if(false){ 
    console.log("first print");
}
// another example
 if(5>6){
    console.log("second print");
}
if(10==10){
    console.log("third print");
}
//nested block  // nested if 
if(8>6){
    console.log("parent print");
    if(3>7){
        console.log("child print");
    }
        if(false){
            console.log("nested child")

    }
}
