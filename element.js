//  To check whether fist and last elemnet are same  and print their sum,
let arr = [3, 2, 1 , 4, 16, 20, 7, 22, 44, 7, 3, 23];
function checkFirstAndLast(arr) {
    if (arr.length === 0) {
        return "Array is empty";
    }
    if (arr[0] === arr[arr.length - 1]) {
        return `first and last elements are same: ${arr[0]}`;

    }
    else {
        return `first and last elements are not same: ${arr[0]} and ${arr[arr.length - 1]}`;
    }
}
console.log(checkFirstAndLast(arr));