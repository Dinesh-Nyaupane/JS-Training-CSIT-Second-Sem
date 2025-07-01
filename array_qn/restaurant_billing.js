let array = [100, 200, 150, 300, 250];
let mapped_array = array.map((item) => item + (item * 13) / 100);
let reduced = mapped_array.reduce((sum, value) => sum + value, 0);
console.log(reduced);
