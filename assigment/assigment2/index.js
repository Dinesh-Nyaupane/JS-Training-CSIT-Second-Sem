// let age = parseInt(prompt("Enter your age:"));
// let income = parseFloat(prompt("Enter your monthly income:"));
// let creditScore = parseInt(prompt("Enter your credit score:"));

// let isAgeOk = age >= 25 && age <= 60;
// let isIncomeOk = income >= 30000;
// let isCreditOk = creditScore > 650;

// let result = isAgeOk && isIncomeOk && isCreditOk ?
//   "Loan Approved." :
//   isAgeOk && isIncomeOk ?
//     "Good income and age, but poor credit score." :
//     isAgeOk ?
//       "Meets age only." :
//       "Not eligible for loan.";
// alert(result);



// let age = parseInt(prompt("enter your age :"));
// let credit_score = parseInt(prompt("enter your Credit score : "));
// let monthly_income = parseInt(prompt("Enter your monthly income : "));
// var result = ((age > 25 && age < 60) &&
// (credit_score >= 650) &&
//  (monthly_income >= 30000))
// ?"Loan approved"
// :((age > 25 && age < 60) &&
//  (monthly_income >= 30000))?
// "Good income and age but poor credit score"
// :(age > 25 && age < 60)?"you meet the age only."
// : "you are not eligible for loan";
// alert(result);

let age = parseInt(prompt("Enter your age:"));
let income = parseFloat(prompt("Enter your monthly income:"));
let creditScore = parseInt(prompt("Enter your credit score:"));

let result;

if (age>=25 && age<=60){
  if (income>=30000){
    if(creditScore>=650)
    {
      result="loan approved";
    }
    else{
      result="only your age and income met the criteria but your creditscore doesn't";
    }
  }
  else{
    result="only your age met the criteria";
  }
}
else{
  result="you aren't eligible for loan";
}
console.log(result);