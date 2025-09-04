let array = [1, "hello", 3, true, 5];
let filtered = array.filter((val) => typeof val === "number");
console.log(`${filtered}`);
