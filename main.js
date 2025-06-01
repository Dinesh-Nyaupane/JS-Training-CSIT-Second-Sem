//1. sum of digits
// Write a function that takes a positive number and returns the sum of its digits. Do this without converting the number to a string or using arrays.

function DigitSum(num) {
  let sum = 0;
  while (num > 0) {
    sum = sum + (num % 10); // Extract the last digit (gives reminder)
    num = num / 10; // Removes the last digit (gives quotient)
  }
  return sum;
}
let number = parseInt(prompt("Enter a number"));
let newsum = DigitSum(number);
console.log("The sum of digits " + number + " is" + " =" + newsum);



//-----------------------------------------------------------------------------------------------------------------------------------------------------------

//2.⁠ ⁠Count Even Numbers Between Two Values
// Write a function that takes two numbers (start and end) and returns how many even numbers lie strictly between them.

function CheckEven(start, end) {
  let count = 0;
  for (i = start; i <= end; i++) {
    if (i % 2 == 0) {
      count++;
    }
  }
  return count;
}

let num1 = parseInt(prompt("enter starting number"));
let num2 = parseInt(prompt("enter ending number"));

let result = CheckEven(num1, num2);
console.log("even number between these two numbers" +num1  + num2 + " = " + result);



//---------------------------------------------------------------------------------------------------------------------------------------------------------

//3.Check if a Number is a Perfect Square
// Write a function that takes a number and returns true if it is a perfect square, otherwise false. Do not use Math.sqrt or any built-in square root function.

function SquareCheck(number){
    if (number<0){
        return false;
    }
    let i=0;
    while(i * i <= number){
        if ( i * i ===number){
            return true;
        }
       i++;
    }
     return false;
}
let numb=parseInt(prompt("enter a number"))
let ans=SquareCheck(numb)
console.log(ans)


//---------------------------------------------------------------------------------------------------------------------------------------------------------

//4. Simulate Basic Salary with Bonus
// Write a function that takes a basic salary and the number of extra hours worked. Each extra hour adds ₹50 bonus. Return the total salary.

function SalaryCheck(salary,hours){
    let bonus= hours*50
    let total = salary + bonus
    console.log("total salary whith extra hours bonus is"+"= " + total )

}
let salary1 = parseInt(prompt("Enter basic salary"))
let hours1 = parseInt(prompt("Enter extra hours worked"))
SalaryCheck(salary1,hours1)



//---------------------------------------------------------------------------------------------------------------------------------------------------------

//5.5.⁠ ⁠Function Scope and Variable Shadowing

// Predict and explain the output of the following code:
// let a = 10;
// function test() {
//     let a = 5;
//     if (true) {
//         let a = 20;
//         console.log(a); // ?
//     }
//    if (true) {
//         let a = 20;
//         console.log(a);    // ?
// }
// test();
// console.log(a);         // ?
// --------------------------



//ANS = 20,5,10


///lets explain how ??


//At first  let a = 10; //this is a global variable 

//Inside function test() here again a new local variable a=5 is declared inside the function. which shadows the global (a) the global a = 10 is not accessible inside the function anymore.

// There is condition if(true) .....here inside the conditon again a new local variable a is decleared ....This shadows the function’s a = 5 only within the block.
// if (true) {
//         let a = 20;
//         console.log(a);
// so it console value a which is 20.

//After that now we are out of if block but still we are inside the function so, we are accessing value  local variable of function a=5 ;
//so this    console.log(a); gives output 5
 
//now we are out of function 
//  console.log(a); //this is after calling test(),in the global scope again which is a=10
// so we get ans as 10.

//--------------------------------------------------------------------------------------------------------------------------------------------------------------