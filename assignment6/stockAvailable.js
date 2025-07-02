// A store tracks product availability using a boolean array. Check if any product is out of stock. Hint: Use .some(). Input: [true, true, false, true] Output: Some items are out of stock.
const stock = [true, true, false, true];
console.log(
  stock.some((condn) => condn === false)
    ? "Some items are out stock"
    : "All items are in stock"
);
