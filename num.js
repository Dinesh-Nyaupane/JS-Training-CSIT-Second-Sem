/*[1,5,7,8,3,4,0,11,4,55,77,10,40,6,10]
1. Find the first even number and its index in an array.



*/
const arr = [1, 5, 7, 8, 3, 4, 0, 11, 4, 55, 77, 10, 40, 6, 10];
const findFirstEven = (arr) => {
    for (let i= 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) { 
            return { index : i, value : arr[i]};
        }
    }
    return null;
}
const result = findFirstEven(arr);
if (result) {
    console.log(`First even number is ${result.value} at index ${result.index}`);
} else {
    console.log("No even number found");
}