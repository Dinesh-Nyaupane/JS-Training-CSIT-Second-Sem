//  check if the number provided by user exist in array or  not
let arr = [10, 20, 2, 5, 7, 9, 8, 31, 42, 99, 30, 17];
let num = parseInt(prompt("enter a number in array"));
if (arr.includes(num)) {
    console.log("number exists in array");
}
else {
    console.log("number don't exist in array");
}