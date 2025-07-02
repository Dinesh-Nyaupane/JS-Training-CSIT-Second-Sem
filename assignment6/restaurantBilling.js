const itemList = [100, 200, 150];
const vat = itemList.map((bill) => bill + bill * 0.13);
const sum = vat.reduce((sum, value) => sum + value);
console.log(sum);