"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// type Cartype={
//     price:number,
//     color:string,
//     print:()=>number
// }
// class Car{
//     price:number=0;
//     color:string="not define"
//     constructor(color:string,price:number){
//         this.color=color;
//         this.price=price;
//         console.log("constructor")
//     }
//     print=()=>{
//         console.log("print");
//         return 0
//     }
// }
// let carB:Cartype=new Car("mehroon",98)
// console.log(carB);
console.log("start");
function promisefunction(resolve, reject) {
    if (true) {
        resolve("successfully execute code");
    }
    else {
        reject("something wrong");
    }
}
new Promise(promisefunction);
let result = new Promise(promisefunction);
result.then((success) => {
    console.log("sucess", success);
});
result.catch((error) => {
    console.log("error", error);
});
console.log("stop");
