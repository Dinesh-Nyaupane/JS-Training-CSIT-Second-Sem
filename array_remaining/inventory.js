/*
 Problem 7: Inventory Sales Summary
Problem: You are tracking the total number of items sold in a store. Given an array of sold units per product, calculate the total. Hint: Use .reduce(). Input: [2, 5, 7, 3] Output: Total items sold: 17




*/
function calculateTotalItemsSold(soldUnits) {
    const totalItemsSold = soldUnits.reduce((total, units)) => total + units, 0;
    console.log("Total items sold:", totalItemsSold); 
}
const soldUnitsInput = prompt("Enter sold units separated through commas");
const soldUnitsArray = soldUnitsInput.split(",").map(units => parseInt(units.trim(), 10));
calculateTotalItemsSold(soldUnitsArray);