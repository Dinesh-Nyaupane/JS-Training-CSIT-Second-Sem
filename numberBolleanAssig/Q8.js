function calculateBill(units) {
  units = parseInt(units);
  if (isNaN(units) || units < 0) return false;
  let bill = 0;
  if (units <= 100) {
    bill = units * 5;
  } else if (units <= 200) {
    bill = 100 * 5 + (units - 100) * 7;
  } else {
    bill = 100 * 5 + 100 * 7 + (units - 200) * 10;
  }
  return `Electricity bill for ${units} units is ${bill}`;
}
