// Print all the even numbers and their sum of given array .
let arr = [10, 20, 2, 5, 7, 9, 8, 31, 42, 99, 30, 17];
let sum = 0;
let evenNumbers = arr.filter(num => {
    if (num % 2 === 0) {
        sum += num;
        return true;
    }
    return false;
})
console.log("even num :", evenNumbers);
console.log("sum of even num:", sum);