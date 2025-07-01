let array = [30, 55, 70, 45, 90];
let filtered = array.filter((value) => value >= 50);
let mapped = filtered.map((new_value) => new_value + 10);
console.log(mapped);