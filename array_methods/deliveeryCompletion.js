const orders = [true, true, false, true];

if (orders.every(status => status === true)) {
  console.log("All orders are delivered");
} else {
  console.log("Not all orders are delivered");
}
