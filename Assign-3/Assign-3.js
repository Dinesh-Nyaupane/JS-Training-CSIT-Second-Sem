/*
//-----------------------------------------------------------------------------------
// Assignment - 1
//-----------------------------------------------------------------------------------

1. 🟢 Area of Circle Calculator
Problem:
Create a function that prompts the user for the radius of a circle, validates the input as a finite positive number, then calculates and returns the area of the circle rounded to 2 decimal places.

Hint:
Use Number(), isFinite(), Math.PI, Math.pow(), and toFixed().

Sample Input:
7

Sample Output:
Area of circle with radius 7 is 153.94
The area is calculated using π × 7², rounded to 2 decimals.

What to Use:
Number(), isFinite(), Math.PI, Math.pow(), toFixed()
*/

/*
function Area(r)
{
return (Math.PI * Math.pow(r, 2)) ;
}
 let r = Number(prompt("Enter the radius : "));
if(isFinite(r))
{
 res = Area(r);
}else{
    alert("Please enter Finite number !");
}
console.log("The area of the circle is : "+res.toFixed(2));
*/

//-----------------------------------------------------------------------------------
// Assignment - 2
//-----------------------------------------------------------------------------------

/*
2. 🔐 OTP Generator (6-digit, No Leading Zeros)
Problem:
Create a function that generates a 6-digit OTP as a number, ensuring no leading zeros.

Hint:
Use Math.random() scaled between 100000 and 999999, then Math.floor().

Sample Output:
Generated OTP is 567834
6-digit OTP without leading zeros for secure verification.

What to Use:
Math.random(), Math.floor()
*/

/*
function OTPgenerator()
{
    console.log(Math.floor(Math.random(6)*1000000));
}
OTPgenerator();
*/
//-----------------------------------------------------------------------------------
// Assignment - 3
//-----------------------------------------------------------------------------------

/*
3. 🎲 Dice Roll Simulator
Problem:
Create a function that simulates rolling a 6-sided dice returning a random integer from 1 to 6.

Hint:
Use Math.random(), scaled and rounded appropriately.

Sample Output:
Dice roll result: 4
Simulates fair dice roll generating number between 1 and 6.

What to Use:
Math.random(), Math.ceil()
*/

/*
function LUDO_bit()
{
        let v = Math.ceil(Math.random()*6); // here 6 means it will show upto 6 .
       return v ;
}
let res = LUDO_bit();
console.log(+(res));
*/

//-----------------------------------------------------------------------------------
// Assignment - 4
//-----------------------------------------------------------------------------------
/*
4. ⛽ Fuel Consumption Calculator
Problem:
Calculate fuel consumption in km/l given distance traveled and fuel used.

Hint:
Validate inputs as finite numbers.

Sample Input:
Distance: 450, Fuel: 35.5

Sample Output:
Fuel consumption is 12.68 km/l
Vehicle runs 12.68 km per liter of fuel.

What to Use:
Number(), isFinite(), toFixed()
*/

/*
function Fuelcalculator(distance, fuel)
{
    let consumption = (distance / fuel);
    return consumption;
}
let distance = Number(prompt("Enter the distance in km : "));
let fuel = Number(prompt("Enter the  fuel in litre  : "));
let res1 ;
if(isFinite(distance, fuel))
{
  res1 =   Fuelcalculator(distance, fuel);
}else{
    alert("Please enter finite input !");
}
console.log("Fuel consumption is "+(res1).toFixed(2));
console.log("Vehicle runs "+(res1).toFixed(2)+" km per liter of fuel");
*/

//-----------------------------------------------------------------------------------
// Assignment - 5
//-----------------------------------------------------------------------------------
/*
5. 💰 Loan EMI Calculator
Problem:
Calculate monthly EMI based on principal, annual interest rate, and tenure (years).

Hint:
Use parseFloat(), Math.pow(), and Math.round().

Sample Input:
Principal: 500000, Rate: 8.5%, Tenure: 20 years

Sample Output:
Monthly EMI is 4207
Monthly payment calculated from compound interest formula.

What to Use:
parseFloat(), Math.pow(), Math.round()
*/

/*
function EMIcalcu(P, R, Y)
{
  let CI = P*(Math.pow(1 + parseFloat(R/100),Y)-1);
  return CI ;
}
let P = Number(prompt("Enter the principal : "));
let R = Number(prompt("Enter the annual_Interest_rate : "));
let Y = Number(prompt("Enter the Tenure : "));
let res = EMIcalcu(P, R, Y);
console.log("Monthly EMI is "+Math.round((res))+" Rs.");
*/
//-----------------------------------------------------------------------------------
// Assignment - 6
//-----------------------------------------------------------------------------------
/*
6. 🌡️ Temperature Converter with Validation
Problem:
Convert Celsius temperature to Fahrenheit with input validation.

Hint:
Use Number(), isFinite(), toFixed() and return false on invalid input.

Sample Input:
37.5

Sample Output:
37.5°C equals 99.5°F
Valid Celsius converted accurately.

Invalid Input:
"abc"

Sample Output:
false

What to Use:
Number(), isFinite(), toFixed()
*/

/*
function TemperatureConverter()
{
  let Fahrenheit = (1.8 * Celcius + 32);
  return Fahrenheit ;
}
let Celcius = Number(prompt("Enter the temperature in °C : "));
let res ;

if(isFinite(Celcius))
{  
    res = TemperatureConverter(Celcius);
console.log((Celcius)+" °C equals to "+(res).toFixed(2)+" °F");
}else{
    console.log("False.")
}
*/

//-----------------------------------------------------------------------------------
// Assignment - 7
//-----------------------------------------------------------------------------------

/*
7. 🎫 Random Coupon Code Generator (6-digit)
Problem:
Generate a random 6-digit coupon code number without leading zeros.

Sample Output:
Coupon code generated: 345678

What to Use:
Math.random(), Math.floor()

*/

/*
function Coupongenerator()
{
    console.log(Math.floor(Math.random(6)*1000000));
}
Coupongenerator();
*/

//-----------------------------------------------------------------------------------
// Assignment - 8
//-----------------------------------------------------------------------------------

/*
8. 💡 Electricity Bill Calculator
Problem:
Calculate bill based on slab rates:

Units Consumed	Rate per Unit
0 - 100	 = Rs. 5
101 - 200 = Rs. 7
> 200 = Rs. 10
Sample Input:
150

Sample Output:
Electricity bill for 150 units is 950
Charges: (100×5) + (50×7) = 500 + 350 = 850

What to Use:
parseInt(), isNaN(), Math.round()
*/

/*
function Electribillcalcu(units)
{
 if(units > 0 && units <= 100)
 {
    return units * 5 ;
 }
 if(units >= 101 && units <= 200)
 {
    return (100*5)+(units-100)*7 ;
 }
 if(units > 200)
 {
    return (100*5)+(100*7)+(units-200)*10 ; 
 }
}
let units = (parseInt(prompt("Enter the units of consumption : ")));
let res ;
if(!isNaN(units))
{
     res = Electribillcalcu(units);
     console.log("Electricity Bill for "+(units)+" is "+Math.round((res)));
}else{
    alert("Please enter Valid input");
}
    */

//-----------------------------------------------------------------------------------
// Assignment - 9
//-----------------------------------------------------------------------------------
/*
Problem:
Roll a dice once; if 1, roll again and return second result; else return first.

Sample Output:
First roll: 4
or
First roll: 1, re-roll: 5

What to Use:
Math.random(), Math.ceil()
*/

/*
function Dice_roll()
{
    let v = Math.ceil(Math.random()*6);
    if(v == 1) {
        return Dice_roll();
    } 
        return v;
    
}

let res = Dice_roll();
console.log(res);
*/

//-----------------------------------------------------------------------------------
// Assignment - 10
//-----------------------------------------------------------------------------------

/*
10. 🏅 Grade Calculator
Problem:
Return grade (A-F) based on score 0-100; false for invalid.

Grade Mapping:

80–100: A
60–79: B
40–59: C
20–39: D
0–19: F
Sample Input:
85

Sample Output:
Score 85 corresponds to grade A

Invalid Input:
120

Sample Output:
false

What to Use:
isFinite(), Boolean primitive
*/

/*
function Gradecalcu()
{
  if(score >= 80 && score <=100)
  {
    return "A" ;
  }
     else if(score >= 60 && score <=79)
      {
         return "B" ;
      }
        else if(score >= 40 && score <=59)
        {
            return "C" ;
        }
          else if(score >= 20 && score <=39)
          {
            return "D" ;
          }
            else if(score >= 0 && score <=15)
                {
                return "E" ;
                }
                  else{
                    return "False" ;
                  }
}
let score = Number(prompt("Enter the score to check it's corresponding grade : "));
let res ;
if(isFinite(score))
{
  res  = Gradecalcu(score);
  console.log("Score "+(score)+" corresponds to grade "+(res));
}else{
    console.log(res);
}
    */

//-----------------------------------------------------------------------------------
// Assignment - 11
//-----------------------------------------------------------------------------------
/*
11. 📈 Bank Interest Calculator
Problem:
Calculate compound interest final amount.

Sample Input:
P=10000, r=5, n=3

Sample Output:
Final amount after 3 years at 5% is 11576.25

What to Use:
parseFloat(), Math.pow(), toFixed()
*/

/*
function Bank_interest_calcu(P, R, T)
{
   let CI = P*(Math.pow(1 + parseFloat(R/100),T)-1);
   return CI ;
}
let P = Number(prompt("Enter the principal : "));
let R = Number(prompt("Enter the interest rate : "));
let T = Number(prompt("Enter the year : "));
let res = Bank_interest_calcu(P, R, T);
console.log("Your Bank Interest is "+(res).toFixed(2));
*/

//-----------------------------------------------------------------------------------
// Assignment - 12
//-----------------------------------------------------------------------------------
/*
12. ⚖️ BMI Calculator with Validation
Problem:
Calculate BMI from weight (kg) and height (m).

Sample Input:
Weight = 70, Height = 1.75

Sample Output:
BMI calculated as 22.9

Invalid Input:
weight = "abc"

Sample Output:
false

What to Use:
Number(), isFinite(), toFixed()
*/

/*
function BMI_calculator(wt, ht)
{
  let BMI = (wt/(ht*ht))
  return BMI ;
}
let wt , ht ,res ;
wt = Number(prompt("Enter your weight in kg : "));
ht = Number(prompt("Enter your height in meter : "));
if(isFinite(wt, ht))
{
    res = BMI_calculator(wt, ht);
    console.log("BMI calculated as "+(res).toFixed(2));
}else{
    console.log("False");
}
*/
//-----------------------------------------------------------------------------------
// Assignment - 13        [NOT COMPLETED]
//-----------------------------------------------------------------------------------
/*
13. 💳 Maximum Transaction Finder
Problem:
Input 3 transaction amounts, find max ignoring invalid.

Sample Input:
1000, "abc", 1200.50

Sample Output:
Maximum valid transaction amount is 1200.5

What to Use:
Math.max(), isNaN()
*/

//NOTE : isFinite also converts string into number but not datatype i.e; reads as string but take as value
/*

isFinite("123");       // true – "123" is converted to the number 123
isFinite("abc");       // false – "abc" cannot be converted to a number
isFinite("Infinity");  // false – Infinity is not finite
isFinite("");          // true – empty string is converted to 0
isFinite("0");         // true – "0" is a finite number
*/

// function Max_Transaction_finder(T1 = 0, T2 = 0, T3 = 0)
// {
//    let maxxe = Math.max(T1, T2, T3);
//    return maxxe ;
// }
// let T1 = prompt("Enter the transaction - 1 : ");
// let T2 = prompt("Enter the transaction - 2 : ");
// let T3 = prompt("Enter the transaction - 3 : ");
// let res;
// if(isNaN(T1))  // this becomes true if string is passed
// {
//   res = Max_Transaction_finder(T2, T3);
// //   console.log("Maximum valid transaction amount is "+(res));
// }else if(isNaN(T2))
//     {
//        res = Max_Transaction_finder(T1, T3);
// //   console.log("Maximum valid transaction amount is "+(res));

//     }else if(isNaN(T3))
//         {
//              res = Max_Transaction_finder(T1, T2);
//   console.log("Maximum valid transaction amount is "+(res));
//         }else{
//                res = Max_Transaction_finder(T1, T2, T3);
//   console.log("Maximum valid transaction amount is "+(res));
//         }

//         function Max_Transaction_finder(T1 = 0, T2 = 0, T3 = 0)
// {
//    let maxxe = Math.max(T1, T2, T3);
//    return maxxe ;
// }
// let T1 = prompt("Enter the transaction - 1 : ");
// let T2 = prompt("Enter the transaction - 2 : ");
// let T3 = prompt("Enter the transaction - 3 : ");
// let res;
// if(isNaN(T1))  // this becomes true if string is passed
// {
//   res = Max_Transaction_finder(T2, T3);
//   if(isNaN(T2))
//   {
//       res = Max_Transaction_finder(T1, T3);
//     }if(isNaN(T3))
//     {
//       res = Max_Transaction_finder(T1, T2);
//     }
//     if(isNaN(T1) && isNaN(T2) && isNaN(T3))
//         {
//             console.log("Please enter at least one valid input !");
//         }
//         else{
//             res = Max_Transaction_finder(T1, T2, T3);
//             console.log("Maximum valid transaction amount is "+(res));
//             }
//     }
//     else{
//         console.log("Maximum valid transaction amount is "+(res));
// }

//-----------------------------------------------------------------------------------
// Assignment - 14
//-----------------------------------------------------------------------------------
/*
4. √ Square Root Checker
Problem:
Return square root if input non-negative, else false.

Sample Input:
16

Sample Output:
Square root of 16 is 4

//Invalid Input:
-9

//Sample Output:
false

What to Use:
Math.sqrt(), Boolean primitive
*/

/*
function SqrROOTchecker(num)
{
  return Math.sqrt(num);
}
let res ;
let num = parseInt(prompt("Enter the number : "));
if(num > 0)
{
    res = SqrROOTchecker(num);
    console.log("Square root of "+(num)+" is "+(res));
}else{
    console.log("False !");
}
*/
//-----------------------------------------------------------------------------------
// Assignment - 15
//-----------------------------------------------------------------------------------
/*
15. ↔️ Absolute Temperature Difference
Problem:
Return absolute difference of two temps.

Sample Input:
25.4, 30.9

Sample Output:
Temperature difference is 5.5

What to Use:
Math.abs(), toFixed()

 */

/*
function Abs_temp_diff(temp1, temp2)
{
  return Math.abs(temp1 - temp2);
}
let temp1 = Number(prompt("Enter the temperature - 1 : "));
let temp2 = Number(prompt("Enter the temperature - 2 : "));
let res = Abs_temp_diff(temp1, temp2);
console.log("Temperature diffrence is "+(res));
*/

//-----------------------------------------------------------------------------------
// Assignment - 16
//-----------------------------------------------------------------------------------
/*
Math.floor(Math.random() * (max - min + 1)) + min; --> general formula to have control 

16. 🔢 Random Password Length Generator
Problem:
Generate random integer between 8 and 16 inclusive.

Sample Output:
Generated password length is 12

What to Use:
Math.random(), Math.floor()
*/

/*
function LenGenerate()
{
console.log(Math.floor(Math.random()* 9)+8);
}
LenGenerate();
*/

//-----------------------------------------------------------------------------------
// Assignment - 17
//-----------------------------------------------------------------------------------
/*
17. 👶 Age Validator
Problem:

Validate age between 0 and 120 inclusive.

Sample Input:
25

Sample Output:
true

Invalid Input:
150

Sample Output:
false

What to Use:
isFinite(), Boolean primitive

*/

/*
function Agevalidator(age) {
  if(isFinite(age))
  {
    if (age > 0 && age < 120) {
    return 1;
  } else {
    return 0;
  }
  }
}
let age = Number(prompt("Enter the age : "));

if (Agevalidator(age)) {
  console.log("True");
} else {
  console.log("False");
}
  */

//-----------------------------------------------------------------------------------
// Assignment - 18
//-----------------------------------------------------------------------------------

/*
18. 💱 Currency Converter
Problem:
Convert USD to EUR at fixed rate (e.g., 0.915).

Sample Input:
100

Sample Output:
100 USD equals 91.50 EUR

What to Use:
Number(), toFixed()
*/

/*
function Currencyconverter(USD)
{
  return (USD * 0.878);
}
let USD = Number(prompt("Enter the amount : "));
let res = Currencyconverter(USD);
console.log((USD)+" USD equals "+(res).toFixed(2));
*/


//-----------------------------------------------------------------------------------
// Assignment - 19
//-----------------------------------------------------------------------------------
/*
19. 🎨 Random Hex Color Generator
Problem:
Generate random 6-digit hex color code string with #.

Sample Output:
Generated color code: #3a5fcd

What to Use:
Math.random(), toString(16)
*/

/*
function HEXcolrgen()
{
  return Math.floor((Math.random()*16777215)).toString(16)  ;
}
let code = HEXcolrgen();
console.log("#"+code);
*/

//-----------------------------------------------------------------------------------
// Assignment - 20
//-----------------------------------------------------------------------------------

/*
20. 💼 Loan Eligibility Checker
Problem:
Check if income > 3×expenses.

Sample Input:
Income = 9000, Expenses = 2500

Sample Output:
Loan eligibility: true

What to Use:
Number(), Boolean primitive
*/

/*
function Loan_eligibility_checker(income, Expenses)
{
  if(income > Expenses)
  {
    return "True";
  }else{
    return "False";
  }
}
let income = Number(prompt("Enter your income : "));
let Expenses = Number(prompt("Enter your Expenses : "));
let res = Loan_eligibility_checker(income, Expenses);
console.log("Load Eligibility : "+(res));
*////test