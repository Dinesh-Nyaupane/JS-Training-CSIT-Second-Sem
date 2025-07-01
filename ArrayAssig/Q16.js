//count number frequencies
let scores = [5, 2, 5, 6, 5];
let target = 5;
let count = scores.filter(score => score === target).length;
console.log(`${target} occurs ${count} times`);
