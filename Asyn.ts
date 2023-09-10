//async functions
// no sequence in sync
// time is includes
//these code is not run  in sequence 
//real time example be the app where a patient animation inculde which have time include for 
//short term and long term breathing
function _name(){
    console.log("in function")
}
_name()
//time duration occuring in tyoescript
console.log("start");
setTimeout(()=>{
    console.log("in timeout");
},5000);//5000 represnts the 5 sec becuase the parameter is guven as in miliseconds
console.log("end");//in timeout will print after of 5sec
//use setInterval
// function printin(){
//     console.log("in setinterval")
// }
// setInterval(printin,7000);
// console.log("end")
//setInterval run continuously after sometiem 
//setTimeout run only of one type
//..........methods to write async code...........
function printinfunction(){
    const time= new Date();
    const _time =time.toLocaleDateString();
    console.log(_time);
}
let count=0;
let interval=setInterval(()=>{
    printinfunction();
    count++
    if(count===3){
        clearInterval(interval);
    }
},2000)
