let array = [true, true, false, true];
let value = array.some((val) => val === false);
if (value) {
  console.log(`Some items are out of stock`);
} else {
  console.log(`No items are out of stock`);
}
