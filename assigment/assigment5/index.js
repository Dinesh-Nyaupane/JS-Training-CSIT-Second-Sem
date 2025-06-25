let num = parseInt(prompt("Enter a number:"));

while (num >= 10) {
    let sum = 0;
    while (num > 0) {
        sum = sum + (num % 10);
        num = parseInt(num / 10);
    }
    num = sum;
}

console.log("Single digit sum:", num);



///////////////////////////////////////////////////////////////////////////////////////////


// let a = parseInt(prompt("Enter a number:"));
// let count = 0;

// while (a > 0) {
//     let digit = a % 10;
//     if (digit === 5) {
//         count = count + 1;
//     }
//     a = parseInt(a / 10);
// }

// console.log("Count of digits:",count);