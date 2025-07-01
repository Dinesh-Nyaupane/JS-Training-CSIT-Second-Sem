let orders = [1, 2, 2, 3, 4, 4, 5];
let unique = orders.filter((order, index, arr) => arr.indexOf(order) === index);
console.log(unique);
