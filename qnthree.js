/*
Problem: While reviewing a customer's cart,the system must find the price of the most expensive item to offer a premium warranty. 
Hint: Use .reduce() to find the max .
Input: [199, 499, 1299, 850, 350] Output: Most expensive item: 1299


*/
let prices = [199, 499, 1299, 850, 350];
const mostExpensiveItem = prices.reduce((max, current) => {
    return current > max ? current : max;
})
console.log(`Most expensive item: ${mostExpensiveItem}`);