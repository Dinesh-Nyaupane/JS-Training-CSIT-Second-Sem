// Problem: You are preparing inventory reports. Convert all product names to uppercase before displaying. Hint: Use .map(). Input: ["milk", "bread", "butter"] Output: ["MILK", "BREAD", "BUTTER"]
const inventory = ["milk", "bread", "butter"];
console.log(inventory.map((capital) => capital.toUpperCase()));