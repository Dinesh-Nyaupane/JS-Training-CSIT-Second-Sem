/*
let year = Number(prompt("Enter the year you want to check : "));
if((year % 4 == 0) && (year % 100 !== 0) || (year % 400 == 0))
{
    console.log("year "+(year)+" is leap year")
}else{
    console.log("year "+(year)+" is not a leap year")
}
*/
//--------------------------------------------------------------------------------------------------------
// Assignment 1 : Electricity Bill Calculator
/*
_Prmpt the user to enter the number of electricity units consumed.
-Calculate the total electricity bill according to these slabs .
     -First 50 units : Rs.5/units
     -Next 100 units (51-150) : Rs. 7/units
     -Next 150 units (151-300): Rs. 7/units
     -Above 300 units : Rs. 15/units
 -Display the total bill using console.log or alert
 -Validate the input to ensure it is a non- negative number.    
*/


// let unit = Number(prompt("Enter units of you meter : "));
// let Bill ;
// if(unit >= 0 && unit <= 50)
// {
//     Bill = (unit * 5) ;
// }
//  if(unit > 50 && unit <= 150)
// {
//     Bill = (unit - 50) * 7  + (50 * 5) ; // 
// }
//  if(unit > 150 && unit <= 300)
// {
//     Bill =(unit - 150) * 10 + (100 * 7)  + (50 * 5)  ;
// }
//  if(unit > 300)
// {
//     Bill = (unit - 300) * 15 + (150 * 10) + (unit - 50) * 7  + (50 * 5)  ;  
// }
// console.log("The Total Bill is "+(Bill));



//--------------------------------------------------------------------------------------------------------
// Assignment 2 : Water Consumption Tracker
/*
_Ask the user to enter daily water consumption (in liters) for a week (7 days) , one day at a time.
- Use a for loop to accumulate total consumption.
-If any day's input is invalid or less than 0 , propmt again for that day until valid.
-After 7 valid inputs , display total consumtion using alert.
 
*/


let sum = 0 ;
for(let i = 1 ; i <= 7 ; i++)
{
    let num = Number(prompt("Enter the water consumption of day "+(i)));
    while(num < 0)
    {
     num = Number(prompt("Enter the water consumption of day "+(i)));
    }

    sum = sum + num ;
}
alert("The total consumption of water in a week is "+(sum)+" liters");


//--------------------------------------------------------------------------------------------------------
// Assignment 3 : Number Properties checker.
/*
-Prompt the user to enter a number.
-Determine and console.log whether the number is positive or negative 
-Determine and console.log whether the number is even or odd
-Count the number of digits manually (without built-in funcitons) and console.log :
      - "single digits number" if digits = 1 
      - "Double Digits number" if digits = 2 
      - "Number with more than two digits"  if digits > 2

 -Validate the input to ensure it is a valid number.     
*/


// let num = Number(prompt("enter the number :  "));
// console.log("The properties of the given numbers .");
// console.log("\n");
// if(num >= 0)
// {
//     console.log("The given number is positive number .");
// }else{
//     console.log("The given number is negative number .");
// }

// if(num % 2 == 0)
// {
//     console.log("The given number is even number .");
// }else{
//     console.log("The given number is odd number .");
// }

// let temp = num ;
// let rem , rev = 0 , count = 0;
// while(temp != 0)
// {
//     rem = temp % 10 ;
//     rev = rem + (rev * 10);
//     count++ ;
//     temp = parseInt(temp / 10) ;
// }

// if(count == 1)
// {
// console.log("Single Digits number.")
// }else if (count == 2)
// {
// console.log("double Digits number.")
// }else if(count > 2)
// {
// console.log("Number with more than two digits.")
// }



//--------------------------------------------------------------------------------------------------------
// Assignment 4 : PIN verification and ATM Withdrawal Simulation
/*
-Set a correct PIN (eg:1234) and initial account balance (eg : 5000)

-Allow the user up to 3 attempts to enter the correct PIN using a while loop.

-If the withdrawal amount is valid and less than or equal to balance , deduct it and display the remaining 
balance.

-If the withdrawal amount is invalid or insufficient , display an unappropriate alert.

*/


// let count = 0 ;
// let Pin = 9042 ;
// let balance = 5000 ;
// let pin , with_amt ;
// let attempt = 1;
// while(count != 3)
// {
//     console.log("Attempt : "+(attempt));
//     attempt++;
//      pin = Number(prompt("Please enter the correct secutiry Pin : "));
//     count++;
//     if(pin == 9042)
//     {
//         with_amt = Number(prompt("Enter the amount you want to withdraw : "));
//         {
//             if(with_amt <= balance)
//             {
//                 rem_balance = (balance - with_amt);
//                 console.log("The remaining balance is "+(rem_balance));
//             }else{
//                 alert("Invalid withdrawal amount !.")
//             }
//             break;
//         }
//     }
// }
// if(count == 3 || with_amt < 5000)
// {
// alert("You have exceeded the maximum number of attempts that is.Access denied.");
// }




//--------------------------------------------------------------------------------------------------------
// Assignment 5 : Weekly Sales total calculator
/*


*/


// let sum = 0 ;
// for(let i = 1 ; i <= 7 ; i++)
// {
//     let num = Number(prompt("Enter the sale amount of day "+(i)));
//     while(num < 0)
//     {
//      num = Number(prompt("Enter the sale amouunt of day "+(i)));
//     }

//     sum = sum + num ;
// }
// alert("The total sales amount of a week is "+(sum)+" Rs.");



//--------------------------------------------------------------------------------------------------------
// Assignment 6 : Fare Calculator Based in Age and Distance.
/*

*/


// let age = Number(prompt("Enter your age : "));
// let Distance = Number(prompt("Enter Distance you have travelled : "));
// let fare ;
// if(age >= 0 && Distance >= 0)
// {
//     if(age <= 5)
//     {
//        fare =  0 ;
//        alert("Since you are less than 5 yr old so the fare for you is free .")
//     }
//     else if(age > 5 && age <= 12)
//     {
//         fare = Distance * 2 ;
//         alert("Your Fare is "+(fare)+" Rs");
//     }
//     else if(age >=13 && age <= 60)
//     {
//         fare = Distance * 5 ;
//         alert("Your Fare is "+(fare)+" Rs");

//     }else{
//         fare = Distance * 3 ;
//         alert("Your Fare is "+(fare)+" Rs");

//     }
// }else{
//     alert("Invalid age or Distance ! .")
// }


//--------------------------------------------------------------------------------------------------------
// Assignment 7 : Car Rental Cost Calculator.

/* */


// let days = Number(prompt("Enter your days you have rented the car : "));
// let Cost ;
// if(days >= 0)
// {
//     if(days <= 5)
//     {
//         Cost = days * 1000 ;
//         console.log("The total cost is : "+(Cost));
//     }
//     if(days > 5)
//     {
//         Cost = (days - 5) * 800 + (5 * 1000) ;
//         console.log("The total cost is : "+(Cost));
//     }

// }else{
//     alert("Invalid Input ! .")
// }

