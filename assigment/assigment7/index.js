////////////////////////////////Task 1/////////////////////////////////////
let num = parseInt(prompt("Enter a positive integer:"));
if (isNaN(num) || num <= 0) {
    alert("Invalid input. Please enter a positive integer.");
} else {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    alert("Factorial of  is" +factorial);
}


//////////////////////////Task2//////////////////////////////////////
let count = parseInt(prompt("Enter how many odd numbers to sum:"));
if (isNaN(count) || count <= 0) {
    alert("Invalid input. Please enter a positive number.");
} else {
    let sum = 0;
    let number = 1;
    for (let i = 0; i < count; i++) {
        sum += number;
        number += 2;
    }
    alert("Sum of first odd numbers is "+sum);
}

//////////////////////////Task 3//////////////////////////
let x = parseInt(prompt("Enter how many even numbers to sum:"));
if (isNaN(x) || x <= 0) {
    alert("Invalid input. Please enter a positive number.");
} else {
    let sum = 0;
    let number = 2;
    for (let i = 0; i < count; i++) {
        sum += number;
        number += 2;
    }
    alert("Sum of first even numbers is"+sum);
}

////////////////////////Task 4//////////////////////
let n = parseInt(prompt("Enter a number:"));
if (isNaN(n) || n <= 0) {
    alert("Invalid input. Please enter a positive number.");
} else {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i * i;
    }
    alert("Sum of first perfect squares is "+sum);
}

////////////////////////////////////////////////////////////////////////////////////
let q=0,ra=161,rb=28,r=0,sa=1,sb=0,s=0,ta=0,tb=1,t=0;
while(ra==0|| rb==0)
{
    q=rb%ra;
    ra=rb;
}