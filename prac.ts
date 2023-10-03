// // // // // let n = 5;
// // // // // console.log(n); // 5
// // // // // n += 5;
// // // // // console.log(n); // 10
// // // // // n -= 5;
// // // // // console.log(n)
// // // // let sum1 = (x: number, y: number): number => {
// // // //     return x + y;
// // // // }
// // // // let sum=sum1(10, 20); //returns 30
// // // // console.log(sum)
// // // // let sum2 = (x: number, y: number) => x + y;//can skip return
// // // // let add=sum2(3, 4); //returns 
// // // // console.log(add);

// // // // let mj=(x:string,y:string):string=>{
// // // //     console.log("welcome in the world which Allah created for us ")
// // // //     return x+y
// // // // }
// // // // let nm=mj("jiya","malik");
// // // // console.log(nm)
// // // var pets = [];
// // // //pets[0] = "dog"; // adds “dog” to an array at 0 index
// // // pets[1] = "cat"; // adds “cat” to an array at index 1
// // //  let animal=pets.shift(); // removes the first element of an array which is cat in our case
// // //  console.log(animal)
// // // // let ani=pets.unshift("parrot");
// // // // console.log(ani) // adds a new element to an array (at the beginning)
// // const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// // const citrus = fruits.slice(3); // [Orange,Lemon,Apple,Mango]
// // console.log(citrus);
//  for(let i=0;i<7;i++){
//     console.log("hello world"+i);
    
//  }
//  let cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];

//  for (var i = 0; i <= 4; i++) {
//    if ("Islamabad" === cleanestCities[i]) {
//      console.log("It's one of the cleanest cities");
//      break;
//    }
// }
 

var cleanestCities = ["Karachi", "Lahore", "Islamabad", "Peshawar"];

var numElements = cleanestCities.length;
var matchFound = true;

for (var i = 0; i < numElements; i++) {
  if ("Islamabad" === cleanestCities[i]) {
    matchFound = true;
    console.log("It's one of the cleanest cities");
    
  
}
if ("Karachi" === cleanestCities[i]) {
  matchFound === true
  console.log("It's not on the list");
}
}