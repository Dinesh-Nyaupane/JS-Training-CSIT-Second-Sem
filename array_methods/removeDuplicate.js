const orders = [1, 2, 2, 3, 4, 4, 5];

const uniqueOrders = orders.filter((id, idx, self) =>
 self.indexOf(id) === idx
);

console.log(uniqueOrders); 
