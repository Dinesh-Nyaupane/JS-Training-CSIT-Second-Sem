// Problem: In a data cleaning process, extract only numeric values from a mixed-type array. Hint: Use .filter() + typeof. Input: [1, "hello", 3, true, 5] Output: [1, 3, 5]
const array = [1, "hello", 3, true, 5];
console.log(array.filter((check) => typeof check === "number"));
