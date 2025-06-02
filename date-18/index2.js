//-------------------------------------------------------------------------------------------
//assignment - 1
/*
1. Nested Functions: Car Trip Time Estimator
Problem:
Write a function tripTime(distance, speed) that calculates time (in hours) to cover distance km at speed km/h.
Inside it, define a nested function convertToMinutes(hours) that converts hours to minutes and returns it.
tripTime should return total time in minutes.

Sample Input:
tripTime(120, 60)

Sample Output:
120

Hint:
Use division to get hours, nested function to convert to minutes.
*/

/*
function tripTime(distance, speed)
{
    let timeHours = (distance / speed);
    function convertToMinutes(hours)
    {
       return (timeHours * 60 );
    }
return convertToMinutes(timeHours);
}
let distance = Number(prompt("Enter the distance in km: "));
let speed = Number(prompt("Enter the speed in km/hr : "));
let res = tripTime(distance, speed);
console.log("The time required to cover "+(distance)+" km at speed "+(speed)+" km/hr is "+(res)+" minutes")
*/
//-------------------------------------------------------------------------------------------
//assignment - 2
/*
2. Recursion: Sum of Digits
Problem:
Write a recursive function sumDigitsRecursive(num) that returns the sum of digits of num.

Sample Input:
sumDigitsRecursive(1234)

Sample Output:
10

Hint:
Sum last digit plus recursive call on num // 10, base case when num is 0.
*/

/*
function sumDigitsRecursive(num)
{
  
    if(num === 0)
    {
        return 0 ;
    }

    return (num % 10) + sumDigitsRecursive((Math.floor(num / 10)));
    
}
let num = Number(prompt("Enter the Digits : "));
let res = sumDigitsRecursive(num);
console.log("The sum of the Digits using recursion is : "+(res));
*/
//-------------------------------------------------------------------------------------------

//assignment - 3
/*
3. Nested Function with Conditions: Exam Result
Problem:
Write a function examResult(marks1, marks2) that returns "Passed" if total marks ≥ 50 else "Failed".
Inside it, define a nested function totalMarks() that sums marks1 and marks2.

Sample Input:
examResult(30, 25)
examResult(20, 15)

Sample Output:
"Passed"
"Failed"

Hint:
Use the nested function to calculate total marks, then use if-else to decide pass or fail.
*/

/*
function examResult(marks1, marks2)
{
    let total = marks1 + marks2 ;
    return totalMarks(total);
    function totalMarks(total)
    {
        if(total >= 50)
        {
            return "Passed" ;
        }else{
            return "Failed" ;
        }
    }

}
let marks1 = Number(prompt("Enter the marks1 : "));
let marks2 = Number(prompt("Enter the marks2 : "));
let res = examResult(marks1, marks2);
console.log(res);
*/


//-------------------------------------------------------------------------------------------

//assignment - 4
/*
4. Recursive Factorial
Problem:
Write a recursive function factorialRecursive(n) to compute factorial of n.

Sample Input:
factorialRecursive(5)

Sample Output:
120

Hint:
Base case is when n equals 0 or 1; recursive case multiplies n by factorial of n-1.
*/

/*
function factorialRecursive(n)
{
    if(n === 0 || n === 1)   // strict equality operator checks both value and type .
    {
        return 1 ;
    }
    return n*factorialRecursive(n-1);
}
let n = Number(prompt("Enter the number : "));
let res = factorialRecursive(n);
console.log("the factorial of "+(n)+" is "+(res));
*/

//-------------------------------------------------------------------------------------------

//assignment - 5
/*
5. Nested Function: Salary Calculator
Problem:
Write a function calculateSalary(hoursWorked) that calculates salary based on:

First 40 hours paid at $10/hour
Hours beyond 40 paid at $15/hour
Inside it, define a nested function overtimePay(hours) that calculates pay for overtime hours.

Sample Input:
calculateSalary(45)

Sample Output:
475

Hint:
Use conditionals to check if hoursWorked is more than 40 and calculate salary accordingly.

*/
/*
function calculateSalary(hoursWorked)
{
    let salary ;
    if(hoursWorked > 0 && hoursWorked <= 40)
    {
      return  (hoursWorked * 10);
    }
    else if(hoursWorked > 0 && hoursWorked > 40)
    {
        return (40 * 10) + (hoursWorked - 40) * 15 ;
    }
}
let hoursWorked = Number(prompt("Enter the hours you have worked : "));
let salary = calculateSalary(hoursWorked);
console.log("Your salary is "+(salary));
*/
//-------------------------------------------------------------------------------------------
//assignment - 6

/*
6. Nested Functions & Conditions: Speed Check
Problem:
Write a function speedCheck(speed) that returns "Slow" if speed < 30, "Average" if speed between 30-60, "Fast" if speed > 60.
Inside it, define a nested function speedCategory() that returns the category string based on speed.

Sample Input:
speedCheck(25)
speedCheck(45)
speedCheck(75)

Sample Output:
"Slow"
"Average"
"Fast"

Hint:
Use nested function to decide the category, then return it.
*/

/*
function speedCheck(speed)
{
    function speedCategory(speed)
    {
       if(speed < 30)
       {
        return "Slow" ;
       }
       else if(speed >= 30 && speed <= 60)
       {
        return "Average" ;
       }
       else if(speed > 60)
       {
        return "Fast" ;
       }
    }
    return speedCategory(speed)
}
let speed = Number(prompt("Enter the speed : "));
let res = speedCheck(speed);
console.log((res)+" Speed !");
*/

//-------------------------------------------------------------------------------------------
