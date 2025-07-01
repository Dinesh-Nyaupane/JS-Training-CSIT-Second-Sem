// print all the odd numbers and their sum form the given array
let arr = [10, 20, 2, 5, 7, 9, 8, 31, 42, 99, 30, 17];
let sum = 0;
let oddNumbers = arr.filter(num => {
    if (num % 2 !== 0) {
        sum += num;
        return true;
    }
    return false;
})
console.log("odd num :", oddNumbers);
console.log("sum of odd num:", sum);