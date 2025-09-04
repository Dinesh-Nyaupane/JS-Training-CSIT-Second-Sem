// // 1 resturant billing with VAT
//  let num = [100, 200, 150];
// let vat= num.map(num=> num+num*13/100)
// console.log(vat.reduce((acc,vat)=>acc + vat,0)); 


// // 2 passed or not
// let mark=[35,80,70,25,90]
// let passed= mark.filter(mark=> mark>=40)
// console.log(passed)


// // 3 find the most expensive item
// let input=[199,499,1299,850,350]
// let expensive=input.reduce((a,b)=> a>b?a:b)
// console.log(expensive)


// // 4. first distinction Student
// let abc=[50,65,77,81,60]
// let dist=abc.find(abc=> abc>=80)
// console.log(`first distinction is ${dist} and firstindex is ${abc.findIndex(abc=> abc>=80)}`)


// // 5: Delivery Completion Check
// let orders = [true, true, false, true];
// if (orders.every(status => status == true)) {
//   console.log("All orders are delivered");
// } else {
//   console.log("Not all orders are delivered");
// }


// // 6: Game Scores with Bonus
// let num= [30, 55, 70, 45, 90]
// console.log(num.filter(total=> total>50).map(num=>num+10));


// 7: Inventory Sales Summary
let sold= [2, 5, 7, 3]
console.log(sold.reduce((add, val) => add + val, 0));


//  8: Movie Duration Filter
let durations = [90, 110, 130, 100];
let firstLongMovie = durations.find(duration => duration > 120);
console.log("First long movie:", firstLongMovie);


// 9: Failing Students Alert
let scl=[70, 55, 30, 85]
console.log(scl.some(iteam=>(scl < 40)))


//  10: Inventory Capitalization
let inventory=["milk", "bread", "butter"]
console.log(inventory.map(item => item.toUpperCase()));


// 11: Meal Calorie Calculator
let cal=[300, 450, 500]
console.log(cal.reduce((aa,bb)=>aa+bb,0))


// 12: Hotel Room Availability Checker
let room=["booked", "booked", "available", "booked"]
let possible = room.findIndex(status => status === "available");
console.log(`First available room at index ${possible}`);


// 13: Out of Stock Alert
let stock=[true, true, false, true]
if(stock.some(result=>result==false)){
console.log("Some items are out of stock");
}


// 14: Product of All Elements
let element=[1, 2, 3, 4]
console.log(`product: ${element.reduce((aa,bb)=>aa*bb,1)}`)


//  15: Extract Numbers from Mixed Array
let extract=[1, "hello", 3, true, 5]
console.log(extract.filter(iteam=> typeof iteam== "number"));


//  16: Count Specific Number Frequency
let spec=[5, 2, 5, 6, 5]
let value=spec.filter(neme=>neme==5)
console.log("5 occurs "+value.length +" time")


// 17: Reverse a Name
let nome="gnidoc"
let split= nome.split("")
console.log(split.reduceRight((aa,bb)=>aa+bb,""))


//  18: Enhance Playlist Titles
let titles= ["Rock", "Jazz", "Pop"]
console.log(titles.map(num=>num+"🎵"))


// 19: First Prime Number Detection
let numbers=[4, 6, 8, 11, 15]
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
let firstPrime = numbers.find(isPrime);
console.log("First prime:", firstPrime);


// 20: Remove Duplicate Orders
let orders = [1, 2, 2, 3, 4, 4, 5];
let uniqueOrders = orders.filter((order, index) => { return orders.indexOf(order) === index;});
console.log(uniqueOrders);

