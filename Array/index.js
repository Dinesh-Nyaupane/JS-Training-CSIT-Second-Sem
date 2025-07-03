//Restaurant Billing with VAT

let input = [100, 200, 150]
let inputVat = input.map((input=>input + 13/100*input));
const summ = inputVat.reduce((add, val)=> add + val, 0);
console.log(summ);

//Passed Students Filter

let marks = [35, 80, 70, 25, 90]
const passed = marks.filter(marks=>marks>=40);
console.log(passed);

//E-Commerse - Find the Most Expensive Item

let price = [199, 499, 1299, 850, 350]
const max = price.reduce((max, price)=>(price>max? price :max), 0);                   //???
console.log("Most expenxive item:", max);

//First Distinction Student

let score = [50, 65, 77, 81, 60]
const dist = score.find(score=>score>=80);
console.log("First Distinction:", dist);

//Delivery Completion Check

let order = [true, true, false, true]
const delivered = order.every(order=>order===true);
console.log("Not all orders are delivered", delivered);

//Game Scores with Bonus

let gscore = [30,55,70,45,90]
const qualified = gscore.filter((gscore=>gscore>50));
const bonus = qualified.map((qualified=>qualified+10));
console.log(bonus);

//Inventory Sales Summary

let items = [2,5,7,3]
const total = items.reduce((add, val)=> add + val, 0)
console.log("Total items sold:", total);

//Movie Duration Filter

let dura = [90, 110, 130, 100];
const movie = dura.find(dura=>dura>120);
console.log("First long movie:", movie);

//Failing Students Alert

let markss = [70,55,30,85];
const failed = markss.some(markss=>markss<40);
if(failed === true){
    console.log("There is atleast one failed student");
}
else{
    console.log("No failed student");
}

//Inventory Capitalization

let product = ["milk", "bread", "butter"];
const cap = product.map(product=> product.toUpperCase());
console.log(cap);

//Meal Calorie Calculator

let calorie = [300,450,500];
const tot = calorie.reduce((add, val)=> add + val, 0);
console.log("Total calories:", tot);

//Hotel Room Availability Checker

let room = ["booked", "booked", "available", "booked"];
const rooom = room.findIndex(rooom=> rooom==="available");
console.log("First available room at index", rooom);

//Out of Stock Alert

let inp = [true, true, false, true];
const prod = inp.some(inp=> inp === false);
if(prod){
    console.log("Some itmes are out of stock");
}
else{
    console.log("All items are in stock");   
}

//Produt of all elements

let elements = [1, 2, 3, 4];
const p = elements.reduce((prod, val)=> prod * val, 1);
console.log("Product:", p);

//Extract Numbers from Mixed Array

let i = [1, "hello",3,true,5];
const o = i.filter(i=>typeof i ==='number');
console.log(o);

//Count Specific Number Frequency

const scores = [5, 2, 5, 6, 5];
const target = 5;

const count = scores.filter(function(score) {
  return score === target;
}).length;

console.log(target + " occurs " + count + " times");

//

const inputt = "coding";

const reversed = inputt
  .split("")
  .reduceRight((acc, char) => acc + char, "");

console.log(reversed); 

//

const playlists = ["Rock", "Jazz", "Pop"];

const updatedPlaylists = playlists.map(name => name + "🎵");

console.log(updatedPlaylists);

//

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const numbers = [4, 6, 8, 11, 15];

const firstPrime = numbers.find(isPrime);

console.log("First prime is:" + firstPrime);

//

const orderIDs = [1, 2, 2, 3, 4, 4, 5];

const uniqueOrderIDs = orderIDs.filter((id, index) => {
  return orderIDs.indexOf(id) === index;
});

console.log(uniqueOrderIDs);









