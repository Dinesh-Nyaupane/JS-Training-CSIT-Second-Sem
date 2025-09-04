// You are tracking the total number of items sold in a store. Given an array of sold units per product, calculate the total. Hint: Use .reduce(). Input: [2, 5, 7, 3] Output: Total items sold: 17
const array = [2, 5, 7, 3, ];
console.log(array.reduce((Sum, value) => Sum + value));