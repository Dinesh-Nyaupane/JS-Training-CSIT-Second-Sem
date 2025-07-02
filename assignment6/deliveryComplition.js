const delivery = [true, true, false, true];
const deliveryStatus = delivery.every((check) => check === true);
console.log(deliveryStatus ? "All delivery done" : "Not all delivery done");
