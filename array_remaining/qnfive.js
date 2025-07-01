/*
Problem 5: Delivery Completion Check
Problem: An online shop stores delivery status of each order as true (delivered) or false (pending). Write a program to verify if all orders have been delivered. Hint: Use .every(). Input: [true, true, false, true] Output: Not all orders are delivered


*/
function checkDeliveryStatus(orders) {
    const allDelivered = orders.every(status => status === true);
    if (allDelivered) {
        console.log("All orders are delivered");
    }
    else {
        console.log("Not all orders are delivered");
    }
}
// // Example
// const orders = [true, true, false, true];
// checkDeliveryStatus(orders);

const orders = prompt("Enter delivery status true for deliverd ,false for not delivered");
const orderArray = orders.split(",") .map(status => status.trim() === 'true');
checkDeliveryStatus(orderArray);
