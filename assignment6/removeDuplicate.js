//  In an order management system, remove duplicate order IDs from the log. Hint: Use .filter() with indexOf() check. Input: [1, 2, 2, 3, 4, 4, 5] Output: [1, 2, 3, 4, 5]
let array = [1, 2, 2, 3, 4, 4, 5];
console.log(array.filter((item, index) => array.indexOf(item) === index));
