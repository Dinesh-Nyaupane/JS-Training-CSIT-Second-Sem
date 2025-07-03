//1
// let input=[100,200,150];
// let vat=input.map((vate=>vate+vate*(13/100)));
// console.log("Total bill: "+ vat.reduce((add,val)=>add+val,0))

//2 passed student filter
// let marks=[35,80,70,25,90];
// let passed=marks.filter((marks)=>marks>=40)
// console.log(passed)

//3 E-commerce
// let input=[199,499,1299,850,350];
// console.log(input.reduce((a,b)=>(a>b)?a:b))

//4 first distinction

// let input=[50,65,77,81,60];
// let dist=input.find((a)=>a>80)
// console.log("First distinction: "+dist)
// console.log("it is in "+ input.findIndex(dist=>dist>80)+" index")

// 5 delivery completion check
// let command=[true,true,false,true];
// console.log(command.every((task)=>(task==true)?"all order has been delivered":"not all orders has been delivered"))


//6  Game Scores with Bonus

// let input=[30, 55, 70, 45, 90];
// let hell=input.filter((imp)=>imp>50)
// console.log(hell)
// console.log(hell.map((same)=>same+10))

//7 Inventory Sales Summary

// let input=[2, 5, 7, 3];
// console.log(input.reduce((a,b)=>a+b,0))

//8 Movie Duration Filter
// let input=[90, 110, 130, 100]
// let duration =2*60;
// console.log(input.find((a)=>a>duration))

//9 Failing Students Alert
// let input=[70, 55, 30, 85];
// console.log(input.some((marks)=>marks<40)?"There is at least one student fail":" All passed")

//10  Inventory Capitalization
//let input=["milk", "bread", "butter"]
//console.log(input.map((arr)=>arr.toUpperCase()))


//11 Meal Calorie Calculator
// let input=[300, 450, 500];
// console.log(input.reduce((a,b)=>a+b,0))

//12 Hotel Room Availability Checker
//let input=["booked", "booked", "available", "booked"];
//console.log("The first available room at index "+input.findIndex((name)=>name==="available"));

//13 Out of Stock Alert
//let input=[true, true, false, true];
//console.log(input.some((hii)=>hii==false)?"Some items are out of stock.":" All items are in  stock.")

//14 Product of All Elements
//let input=[1, 2, 3, 4];
//console.log(input.reduce((acc,num)=>acc*num,1))

//15 Extract Numbers from Mixed Array
//let input=[1, "hello", 3, true, 5]
//console.log(input.filter((inp)=>typeof inp=="number"))

//16 Count Specific Number Frequency
//let input=[5, 2, 5, 6, 5]
//let five=input.filter((num)=>num==5)
//console.log("5 occurs "+ five.length +" times")

//17 Reverse a Name
// let input="coding";
// let arr=input.split("");
// console.log(arr.reduceRight((acc,sum)=>acc+""+sum));


//18 Enhance Playlist Titles
// let input=["Rock", "Jazz", "Pop"];
// console.log(input.map((inp)=>inp+"🎵"))

//19 First Prime Number Detection
// let input=[4, 6, 8, 11, 15]
// function isPrime(num){
//     if (num <= 1) return false;
//   if (num === 2) return true;

//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }
// console.log(input.find(isPrime))


//20 Remove Duplicate Orders
// let input=[1, 2, 2, 3, 4, 4, 5];
// let fil=input.filter((id,index,arr)=>{
//     return arr.indexOf(id)==index;
// })
// console.log(fil)