/*
fing the digit (0 - 9) that occurs least of the time in the number 
using do while loop */



// let num = Number(prompt("Enter the digits :"));
// let min_count = 0;
// let min_digit = 0;
// let first = 1;
// let d = 0 ;
// while(d <= 9)
// {
//     let count = 0 ;
//     let temp = num ;
 
//     while(temp > 0)
//     {
  
//         let digit = temp % 10 ;
//         if(digit == d)
//         {
//             count ++ ;
//         }
//         temp = parseInt(temp / 10) ;
//     }
//     if(count > 0)
//     {
//     if(first || count < min_count )
//     {
//         min_count = count ; 
//         min_digit = d ;
//         first = 0;
//     }
// }
//     d++ ;
// }
// console.log("the least occuring digit is : "+(min_digit)+" and the count is " +(min_count) );

// day - 10 
/* 
Problem :
Ask the user to enter any value . Based on the input , determine whether it is 
a number , boolean , null , or indefined and display the result using alert.
*/


// let input = prompt("Enter the value : ");
// if(input)
// {
//     alert("the type of the value is boolean");
// }else if(input == "")  // this will print undefined when we press OK.
// {
//     alert("the type of the value is undefined");
// }else if(input === null)     // this will print null when cancel button is pressed.
// {
//     alert("the type of the value is null");
// }else{
//     alert("Invalid INput. ");
// }



// Assignment -2 |: Multiplies Printer
/*
Ask the user to enter a number. Use a while loop to print all multiples of
 3 from 1 to that number(inclusive).Stop the loop early if a multiple of 5 is encountered.
*/
 
// let number = Number(prompt("enter the number : "));
// let i = 1;
// while(i <= number)
// {
//     if(i % 3 == 0)
//     {
//       alert(i);
//     }
//     if(i % 5 == 0)
//     {
//       break;
//     }

// i++ ;
// }




//Assignment 3 : ODD NUmberskipper
/*
Ask the user to enter a number . Use a while loop to print all even number 
from 0 to that number (inclusive ) in the console . Skip all odd numbers using 
continue.
*/


let num = Number(prompt("Enter the number : "));
let  i = 0;
while (i <= num)
{
    if(i % 2 == 0)
    {
        console.log(i); // continue skip but still holds the same 
        //iteration so we must do increament before calling continue
         //other wise it will stuck with same iteration upto infinity.
    }else{
        i++ ;
        continue;
    }
   
    i++ ;
}



// Assigmnet - 4  :secret Number guess (do - while challenge)
/*
Set a number (eg : 7) . Ask the user to guess it using prompt
 untill they get it right . After a correct guess , alert "Correct!".
*/


// let num ;
// let secret_num = 7 ;
// let i = 1 ;
// do {
//      num = Number(prompt("Enter the number : "));
//     if(num == secret_num)
//     {
//         alert("correct guess ");
//     }else
//     {
//       alert("Incorrect guess ");
//     }
//     i++ ;
// }while(num != secret_num);



// Assignment - 5 : Truthy or Falsy Checker.
/**
 Ask the user to input a value and determine whether 
 the value is truthy or falsy in JavaScript .
 */

 
 
//  let input = prompt("Enter the value : ");
//  if(input == 0 || input == "" || input == null || input == false || isNaN(input))
//  {
//     alert("The value is falsy ");
//  }else{
//     alert("The value is True ");
//  }
