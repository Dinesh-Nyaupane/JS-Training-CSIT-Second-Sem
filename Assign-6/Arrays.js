//----------------------------------------------------------------------------------
//     PROBLEM - 1 :
//----------------------------------------------------------------------------------
/*
Problem : You are building a digital biling system for a restaurant. You have an array of the prices ordered 
by a customer. You need to calculate the final bill by applying 13% VAT to each item and summing the total.
Hint : Use .map() for VAT, .reduce() for summation Input [100, 200, 150].  OUTPUT : tota; bills : 508.5
*/

/*
let prices = [100, 200, 150];
let afterVatprices = prices.map((prices => prices * (13/100) + prices));
console.log(afterVatprices.reduce((currentValue, value) => currentValue + value , 0));
*/

//----------------------------------------------------------------------------------
//     PROBLEM - 2 :
//----------------------------------------------------------------------------------

/*
🎓 Problem 2: Passed Students Filter
Problem: In a university's result processing system, you are given an array of student marks. 
Write a function to return the list of marks that represent students who passed (>= 40). 
Hint: Use .filter().
 Input: [35, 80, 70, 25, 90]
  Output: [80, 70, 90]
*/

/*
let marks = [35, 80, 70, 25, 90];
let result = marks.filter((marks => marks >= 40));
console.log(result);

*/

//----------------------------------------------------------------------------------
//     PROBLEM - 3 :
//----------------------------------------------------------------------------------

/*
🛍 Problem 3: E-commerce - Find the Most Expensive Item
Problem: While reviewing a customer's cart, the system must find the price of the most expensive item 
to offer a premium warranty. 
Hint: Use .reduce() to find the max. 
Input: [199, 499, 1299, 850, 350] 
Output: Most expensive item: 1299
*/

/*

let customersCart = [199, 499, 1299, 850, 350] ;
let expensiveItems = customersCart.reduce((acc, currentValue) => (currentValue > acc)?currentValue:acc);
console.log("Most expensive item: "+expensiveItems);
*/

//----------------------------------------------------------------------------------
//     PROBLEM - 4 :
//----------------------------------------------------------------------------------
/*
🎓 Problem 4: First Distinction Student
Problem: In a student record system, return the first student who has scored 80 or above for immediate
 distinction notification. 
 Hint: Use .find(). 
 Input: [50, 65, 77, 81, 60]
  Output: First distinction: 81
*/

/*

let percentage = [50, 65, 89, 77, 81, 60];
let firstDistinction = percentage.find((percentage)=> percentage >= 80);
console.log("First distinction is "+firstDistinction);
*/

//----------------------------------------------------------------------------------
//     PROBLEM - 5 :
//----------------------------------------------------------------------------------

/*
🚚 Problem 5: Delivery Completion Check
Problem: An online shop stores delivery status of each order as true (delivered) or false (pending).
 Write a program to verify if all orders have been delivered.
  Hint: Use .every(). Input: [true, true, false, true]
   Output: Not all orders are delivered
*/

/*
let deliveryStatus = [true, true, false, true] ;
let final_status = deliveryStatus.every((checker)=> checker == true);
if(final_status)
{
  console.log("All orders are deliverd");
}else{
  console.log("All orders are not deliverd");
}
*/

//----------------------------------------------------------------------------------
//     PROBLEM - 6 :
//----------------------------------------------------------------------------------

/*
Problem: In a gaming app, scores below 50 are disqualified. The rest get a 10-point bonus. 
Filter and adjust the scores.
 Hint: .filter() then .map().
  Input: [30, 55, 70, 45, 90]
   Output: [65, 80, 100]
*/

/*
NOTE:✅ What happens?

scoreWithbonus IS an array ([65, 80, 100]).
BUT inside ${}, JavaScript automatically calls .toString() on it when turning it into text.
*/

/*

let scores = [30, 55, 70, 45, 90];
let filterScores = scores.filter((score)=> score > 50);
let scoreWithbonus = filterScores.map((filterScores1) => filterScores1 + 10);
// console.log("Output : " + scoreWithbonus); // this + (concatenation) will treat array as string
console.log("Output : ", scoreWithbonus);

*/

//----------------------------------------------------------------------------------
//     PROBLEM - 7 :
//----------------------------------------------------------------------------------
/*
🏬 Problem 7: Inventory Sales Summary
Problem: You are tracking the total number of items sold in a store. Given an array of sold units per 
product, calculate the total. 

Hint: Use .reduce().
 Input: [2, 5, 7, 3]
  Output: Total items sold: 17
*/

/*

let itemsSold = [2, 5, 7, 3];
console.log(`Total items sold:  ${itemsSold.reduce((acc, item) => acc + item ,0)}`);

*/

//----------------------------------------------------------------------------------
//     PROBLEM - 8 :
//----------------------------------------------------------------------------------
/*
🎥 Problem 8: Movie Duration Filter
Problem: In a movie recommendation app, suggest the first movie longer than 2 hours from the given 
durations. Hint: Use .find().
 Input: [90, 110, 130, 100] 
 Output: First long movie: 130
*/

/*
let timeDuration = [90, 110, 130, 100];
console.log(`First long movie: ${timeDuration.find((min) => min > 120)}`)
*/

//----------------------------------------------------------------------------------
//     PROBLEM - 9 :
//----------------------------------------------------------------------------------

/*
🎓 Problem 9: Failing Students Alert
Problem: A school management system must quickly identify if any student has failed an exam (marks < 40). 
Hint: Use .some().
 Input: [70, 55, 30, 85]
 Output: There is at least one failed student.
*/

/*

let marks = [70, 55, 30, 85];
console.log(
  marks.some(mark => mark < 40)
    ? "There is at least one failed student."
    : "All the students passed."
);

*/

//----------------------------------------------------------------------------------
//     PROBLEM - 10 :
//----------------------------------------------------------------------------------

/*
🛒 Problem 10: Inventory Capitalization
Problem: You are preparing inventory reports. Convert all product names to uppercase before displaying.
 Hint: Use .map().
  Input: ["milk", "bread", "butter"] 
  Output: ["MILK", "BREAD", "BUTTER"]
*/

/*
let inventoryProducts = ["milk", "bread", "butter"];
let Output = inventoryProducts.map((Products) => Products.toUpperCase());
console.log("Output: " , Output);  // use , (comma) instead + to concatenate cuz (+) treats as string
*/

//----------------------------------------------------------------------------------
//     PROBLEM - 11 :
//----------------------------------------------------------------------------------

/*
🍔 Problem 11: Meal Calorie Calculator
Problem: In a fitness tracking app, calculate the total calorie intake from a list of food items consumed.

Hint: Use .reduce(). 
 Input: [300, 450, 500]
  Output: Total calories: 1250
*/


/*
let calorieInitem = [300, 450, 500];
console.log(`Total calories:  ${calorieInitem.reduce((acc, item) => acc + item ,0)}`);
*/

//----------------------------------------------------------------------------------
//     PROBLEM - 12 :
//----------------------------------------------------------------------------------
/*
🛏 Problem 12: Hotel Room Availability Checker
Problem: In a hotel booking system, determine the index of the first available room.
 Hint: Use .findIndex().
  Input: ["booked", "booked", "available", "booked"]
   Output: First available room at index 2
*/

/*
let roomStatus = ["booked", "booked", "available", "booked"];
console.log(`Output : First availalble room at index ${roomStatus.findIndex((index) => index == "available")}`);
*/

//----------------------------------------------------------------------------------
//     PROBLEM - 13 :
//----------------------------------------------------------------------------------
/*
🏪 Problem 13: Out of Stock Alert
Problem: A store tracks product availability using a boolean array. Check if any product is out of stock.
 Hint: Use .some().
  Input: [true, true, false, true] Output: Some items are out of stock.
*/

/*

let stockProducts = [true, true, false, true];
let checker = stockProducts.some((stpro) => stpro == false);
console.log(
  checker?
  "Output: some items are out of stock." 
  :"Output: All items are in stock."
);

*/

//----------------------------------------------------------------------------------
//     PROBLEM - 14 :
//----------------------------------------------------------------------------------
/*
🔢 Problem 14: Product of All Elements
Problem: Calculate the product of all elements in a given array for performance analytics. 
Hint: Use .reduce(). Input: [1, 2, 3, 4] Output: Product: 24
*/

/*
let productPerformance = [1, 2, 3, 4];
console.log(`Output: Product:  ${productPerformance.reduce((acc, product) => acc * product ,1)}`);
 */

//----------------------------------------------------------------------------------
//     PROBLEM - 15 :
//----------------------------------------------------------------------------------
/*
📊 Problem 15: Extract Numbers from Mixed Array
Problem: In a data cleaning process, extract only numeric values from a mixed-type array. 
Hint: Use .filter() + typeof. 
Input: [1, "hello", 3, true, 5] 
Output: [1, 3, 5]
*/

/*::NOTE:
So typeof always returns a lowercase string, like "number", "string", "boolean", "object", "function", etc.
*/

/*
let MixedArray = [1, "hello", 3, true, 5];
console.log("Output : " , MixedArray.filter((element) => typeof element === "number"));
*/

//----------------------------------------------------------------------------------
//     PROBLEM - 16 :
//----------------------------------------------------------------------------------

/*
📞 Problem 16: Count Specific Number Frequency
Problem: Given an array of feedback scores, count how many times a particular score (e.g., 5) was given. 
Hint: Use .filter() and .length.
 Input: [5, 2, 5, 6, 5], find 5 Output: 5 occurs 3 times.
*/

/*

let numArray = [5, 2, 5, 6, 5];
let filtered = numArray.filter((num) => num % 5 === 0 );
console.log(`Output: 5 occurs ${filtered.length} times.`);

*/
//----------------------------------------------------------------------------------
//     PROBLEM - 17 :
//----------------------------------------------------------------------------------

/*
🔁 Problem 17: Reverse a Name
Problem: A text editor needs to reverse a string input character by character. 
Hint: Use .split("") + .reduceRight().
 Input: "coding" Output: gnidoc
*/

/*
let stringInput = "coding" ;
let array = stringInput.split("");
console.log(`Output : ${array.reduceRight((acc, val) => acc + val)}`);
*/

//----------------------------------------------------------------------------------
//     PROBLEM - 18 :
//----------------------------------------------------------------------------------
/*
🎵 Problem 18: Enhance Playlist Titles
Problem: In a music app, append a 🎵 emoji to each playlist name for design improvement.
 Hint: Use .map().
  Input: ["Rock", "Jazz", "Pop"] Output: ["Rock🎵", "Jazz🎵", "Pop🎵"]
*/

/*
let playlist = ["Rock", "Jazz", "Pop"];
let musicWithEmoji = playlist.map((music) => music + "🎵");
console.log("Output:" , musicWithEmoji);
*/

//----------------------------------------------------------------------------------
//     PROBLEM - 19 :
//----------------------------------------------------------------------------------
/*
🔍 Problem 19: First Prime Number Detection
Problem: In a math tutoring tool, detect the first prime number from a user-entered array. 
Hint: Use .find() with a custom isPrime() function.
 Input: [4, 6, 8, 11, 15] Output: First prime: 11
*/


/*

let mathArray = [4, 6, 8, 11, 15];

function isPrime(num) {
  if (num <= 1) return false; 
  if (num === 2) return true; 
  if (num % 2 === 0) return false; 
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

let firstPrime = mathArray.find(isPrime);

console.log(`Output: First prime: ${firstPrime}`);
*/

//----------------------------------------------------------------------------------
//     PROBLEM - 20 :
//----------------------------------------------------------------------------------
/*
🧺 Problem 20: Remove Duplicate Orders
Problem: In an order management system, remove duplicate order IDs from the log. 
Hint: Use .filter() with indexOf() check. 
Input: [1, 2, 2, 3, 4, 4, 5] Output: [1, 2, 3, 4, 5]
*/

let OrderIdsArray = [1, 2, 2, 3, 4, 4, 5];

let Output = OrderIdsArray.filter((element, index) => {
  return OrderIdsArray.indexOf(element) === index;
});

console.log(Output); // [1, 2, 3, 4, 5]
