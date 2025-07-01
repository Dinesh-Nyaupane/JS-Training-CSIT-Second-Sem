// let sum = function (a,b) {
//     return a+b;
// }

//Restaurant Billing with vat

let input =[100,200,150]
let inputVat=input.map((input=>input+13/100*input));
const sum =inputVat.reduce((add,val)=>add+val,0);
console.log(sum);


//passed students filter 
let marks=[35,80,70,25,90]
const passed=marks.filter(marks=>marks>=40);
console.log(passed);

//ecommerce-find the most expensive item

let prices = [199, 499, 1299, 850, 350];
let maxPrice = prices.reduce((max, price) => {
  return price > max ? price : max;}, 0);

console.log("Most expensive item:", maxPrice);

//first Distinction student

let score = [50,65,77,81,60]
const dist = score.find(score=>score>=80);
console.log(("first Distinction:",dist));

//Delivery completion Check

let order = [true,true,false,true]
let all = order.every(status => status === true);
if (all) {
  console.log("All orders are delivered");
} else {
  console.log("Not all orders are delivered");
}

//Game Scores with Bonus
let scores = [30, 55, 70, 45, 90];
console.log(scores.filter(score => score >= 50).map(score => score + 10));

//Inventory Sales Summary
let sales = [2, 5, 7, 3];
console.log("Total:",sales.reduce((sum,unit)=> sum+unit,0));

//Movie Duration Filter
let num=[90, 110, 130, 100];
console.log(num.find((num)=>num >120));

//Failing Students Alert
let mark1 = [70, 55, 30, 85];
let stu= mark1.some(mark => mark < 40);
if (stu) {
  console.log("There is at least one failed student.");
} else {
  console.log("All passed.");
}

// Inventory Capitalization
let product=["milk", "bread", "butter"];
console.log(product.map(product=>product.toUpperCase()));

// Meal Calorie Calculator
let Calorie=[300, 450, 500];
console.log(Calorie.reduce((sum, cal) => sum + cal, 0));

//Out of Stock Alert
let stock=[true,true,false,true];
let Outofstock=(stock.some(stocks=> stocks === false));
if(Outofstock){
    console.log("Some items are out of stock");
}else{
    console.log("Available");
}

//Product of All Elements
let element=[1,2,3,4];
console.log(element.reduce((acc,val) => acc*val,1));

//Extract Numbers from Mixed Array
let mixed = [1, "hello", 3, true, 5];
let numbersOnly = mixed.filter(item => typeof item === "number");
console.log(numbersOnly);

//Count Specific Number Frequency
let score2 = [5, 2, 5, 6, 5];
let target = 5;
let count = score2.filter(score => score === target).length;
console.log(`${target} occurs ${count} times`);

//Reverse a Name
let name = "coding";
let reversed = name
  .split("")
  .reduceRight((acc, char) => acc + char);
console.log(reversed);

//Enhance Playlist Titles
let playlists = ["Rock", "Jazz", "Pop"];
let enhanced = playlists.map(title => title + "🎵");
console.log(enhanced);

//First Prime Number Detection
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
let numbers = [4, 6, 8, 11, 15];
let firstPrime = numbers.find(isPrime);
console.log("First prime:", firstPrime);

//Remove Duplicate Orders
let orders = [1, 2, 2, 3, 4, 4, 5];
let uniqueOrders = orders.filter((id, index) => orders.indexOf(id) === index);
console.log(uniqueOrders);
