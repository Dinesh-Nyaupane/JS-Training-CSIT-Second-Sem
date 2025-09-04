let array = [true, true, false, true];
let status_value = array.every((value) => value === true);
if (status_value) {
  console.log(`All are delivered`);
} else {
  console.log(`Not all orders are delivered`);
}
