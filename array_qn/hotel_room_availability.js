let array = ["booked", "booked", "available", "booked"];
console.log(
  `First available room at index ${array.findIndex(
    (value) => value === "available"
  )}`
);
