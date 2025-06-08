
///////////////////////////////  Q.N.14     /////////////////////////////////////////////////////////////
/*
Problem:
Return square root if input non-negative, else false.

Sample Input:
16

Sample Output:
Square root of 16 is 4

Invalid Input:
-9

Sample Output:
false

What to Use:
Math.sqrt(), Boolean primitive
*/

/*
function squareRootChecker(num){
    if(isNaN(num) || num < 0)  return false;
    const number=Math.sqrt(num);//check square root 
    return number;

}
const num=Number(prompt("Enter valid number to check squareRoot:"));
console.log("The square root of " + num +" number is " + squareRootChecker(num));
*/
///////////////////////////////  Q.N.15     /////////////////////////////////////////////////////////////
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
function absoluteTemp(temp1,temp2){
    if(!isFinite(temp1) || !isFinite(temp2))  return false

    const diff =Math.abs(temp1-temp2);
    return diff.toFixed(1);
}
let temp1=parseFloat(prompt("Enter first temperature"));
let temp2=parseFloat(prompt("Enter second temperature"));
console.log("The absolute temperatue difference is : " + absoluteTemp(temp1,temp2) )

*/
///////////////////////////////  Q.N.16     /////////////////////////////////////////////////////////////
/*
16. 🔢 Random Password Length Generator
Problem:
Generate random integer between 8 and 16 inclusive.

Sample Output:
Generated password length is 12

What to Use:
Math.random(), Math.floor()
*/
/*
function passwordLengthGenerator(){
    //const length=Math.floor(8+Math.random()*9);
    const length=Math.floor(8+Math.random()*10)-1;
    return "Generated password length is " + length;
}
console.log(passwordLengthGenerator());
*/
///////////////////////////////  Q.N.17     /////////////////////////////////////////////////////////////
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
function ageValidation(age){
    let validAge=isFinite(age);
    if(validAge>0 && validAge <=120 && !isNaN(validAge))
       return validAge;
    else 
        return false;
}
let age=Number(prompt("Enter age for validation:"));
console.log(ageValidation(age));
*/

///////////////////////////////  Q.N.18     /////////////////////////////////////////////////////////////

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
function usdToEur(curr){
    let rate=0.915;
    let euro=curr*rate;
    return euro.toFixed(2);
}
let curr=Number(prompt("Enter US currency to convert into euro:"));
console.log(curr+ " USD equals " + usdToEur(curr));

*/
///////////////////////////////  Q.N.19     /////////////////////////////////////////////////////////////

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
function hexColor(){
    let  color=Math.ceil(Math.random()*16777125).toString(16).padStart(6,'0');
    /*.padStart(6,'0):->yasle 6 ota vanda kam vayo vane 6 samma banunxa and if
       badhi vayo vane kam garayera 6 matra banaunxa 
       and 0 rakhnu ko karad  if hamle generate garda FF matra ayo vane teslai
       6 digit banune gari 0 thapdinxa eg. #0000FF
       
    *.
    return "Generated Color code : #"+color;
}
console.log(hexColor());


///////////////////////////////  Q.N.20     /////////////////////////////////////////////////////////////
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
//solution
/*

function loanChecker(income,expenses){
    let incomeNum=Number(income);
    let expensesNum=Number(expenses);
    if(!isFinite(incomeNum)|| !isFinite(expensesNum) || incomeNum <0 || expensesNum <0)
        return false;
    else
        return incomeNum > (3*expensesNum);
}
console.log(loanChecker(9000,2500));

*/
