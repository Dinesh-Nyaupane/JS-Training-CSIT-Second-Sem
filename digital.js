/*
Problem:- You are building a digital biling system for a restaurent.You have an array of item prices ordered by a customer.
You need to calculate the final bill by applying 13% VAT to each item and summing the total. Hint: Use .map() forVAT,
.reduce() for summation. Input: [100, 200, 150] Output: Total bill:508.5
*/
let arr = ["", "", "",]
const fun = parseInt(prompt("Enter the array of items prices"));
arr[0] = arr.map(fun);
arr[1] = arr.map(fun);
arr[2] = arr.map(fun);
let cal = fun.forVAT(13/100) + fun.forSummation()
console.log(`Summing the total is ${cal}`);
