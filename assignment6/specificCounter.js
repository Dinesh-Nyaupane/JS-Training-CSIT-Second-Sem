// Problem: Given an array of feedback scores, count how many times a particular score (e.g., 5) was given. Hint: Use .filter() and .length. Input: [5, 2, 5, 6, 5], find 5 Output: 5 occurs 3 times
let array = [5, 2, 5, 6, 5];
let number = Number(prompt("enter the number you want to check"));
console.log(
  `The number ${number} is repeated ${
    array.filter((check) => check === number).length
  } times`
);
