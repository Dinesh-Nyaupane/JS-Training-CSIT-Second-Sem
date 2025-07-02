// In a hotel booking system, determine the index of the first available room. Hint: Use .findIndex(). Input: ["booked", "booked", "available", "booked"] Output: First available room at index 2
//Hotel Room Availability Checker
let rooms = ["booked", "booked", "available", "booked"];
let available= rooms.findIndex(room => room === "available");
console.log(`First available room at index ${available}`);
