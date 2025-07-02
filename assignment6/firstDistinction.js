let markList = [50, 70, 82, 80];
let firstDistinction;
console.log(
  `first distinction is ${markList.find((mark) => mark >= 80)} at index ${markList.findIndex((mark) => mark >= 80)}`
);
