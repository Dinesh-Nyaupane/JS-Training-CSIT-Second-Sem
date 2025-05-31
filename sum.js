//  Sum OF Digits

//  making a function that takes positive number & returns sum of its digits

function sumOfDigits(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = parseInt(num / 10);
    }
    return sum;
}

const input = Number(prompt("Enter positive number:"));
if (input < 0 || isNaN(input)) {
    alert("Enter valid number:");
} else {
    const result = sumOfDigits(input);
    alert(`Sum of digits is: ${result}`);
}