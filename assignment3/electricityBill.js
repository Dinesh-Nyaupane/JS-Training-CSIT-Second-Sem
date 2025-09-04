function calculateElectricityBill(units) {
  const consumed = parseInt(units);
  if (isNaN(consumed) || consumed < 0) return false;

  let bill = 0;
  if (consumed <= 100) {
    bill = consumed * 5;
  } else if (consumed <= 200) {
    bill = 100 * 5 + (consumed - 100) * 7;
  } else {
    bill = 100 * 5 + 100 * 7 + (consumed - 200) * 10;
  }

  return "Electricity bill for " + consumed + " units is " + Math.round(bill);
}
let unit = Number(prompt("Enter units consumed"))
console.log(calculateElectricityBill(unit));