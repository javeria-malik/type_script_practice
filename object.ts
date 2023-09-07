// let username=["javeria","saira","maryam","mahira","maira"]
// console.log(username[1]);
let car={
    company:["honda","bmw","lamborgini"],
    color:"white"
}
console.log(car.color)
console.log(car.company)
console.log(car.company[1])
//can also write properties in it for this purpose if we have values in keys we can say it propertoes
//of we define function  then we can write it as actions
//just write action 
let car1={
    company:["honda","bmw","lamborgini"],
    color:"white",
    year:2001,
    stop:(a:number,b:number)=>{
        return a+b
    }
}
console.log(car1.stop(5,7))
let res=car1.stop(90,80);
console.log(res);
//lets make a list of objects 
let cars=[{
    company:"bmw",
    year:2001,
},
{
    company:"toyota",
    year:2002,
},
{
    company:"honda",
    year:"2003"
}
    
]
console.log(cars[2].company,cars[1].company)
console.log(typeof(cars[2].year));//find the type 
//lets say logical it is not a best approach to save the datatype int into the string we must have to definr data type
let pro:{company:string,year:number,isuser:boolean}={
    company:"bmw",
    year:2001,
    isuser:true
}
console.log(pro)
//another way
//define the type
type A={company:string,year:number,isuser:boolean}
let prop:A={
    company:"bmw",
    year:2001,
    isuser:true
}
console.log(prop)



