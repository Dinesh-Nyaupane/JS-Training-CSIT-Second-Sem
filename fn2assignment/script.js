// 1. Nested Functions: Car Trip Time Estimator

// function tripTime(distance, speed) {
//   function convertToMinute(hours) {
//     return hours * 60;
//   }
//   let hours = distance / speed;
//   return convertToMinute(hours);
// }
// console.log(tripTime(120, 60));

// 2. Recursion: Sum of Digits

// function sumDigitsRecursive(num) {
//   if (num == 0) {
//     return 0;
//   } else {
//     return (num % 10) + sumDigitsRecursive(parseInt(num / 10));
//   }
// }
// console.log(sumDigitsRecursive(123));

// 3. Nested Function with Conditions: Exam Result

// function examResult(marks1, marks2) {
//   function totalMarks() {
//     let total_marks = marks1 + marks2;
//     return total_marks;
//   }
//   return totalMarks() >= 50 ? "Passed" : "Failed";
// }
// console.log(examResult(40, 25));

// 4. Recursive Factorial

// function factorialRecursive(n) {
//   if (n == 0 || n == 1) {
//     return 1;
//   } else {
//     return n * factorialRecursive(n - 1);
//   }
// }
// console.log(factorialRecursive(5));

// 5. Nested Function: Salary Calculator

// function calculateSalary(hoursWorked) {
// let base_hours_price = 0;
//   function overtimePay(hours) {
//     return hours * 15;
//   }
//   let over_time_hours =0;
//   if (hoursWorked <= 40 && hoursWorked > 0) {
//     base_hours_price = 10 * hoursWorked;
//   } else {
//     over_time_hours=hoursWorked-40;
//     base_hours_price = 40 * 10;
//   }
//   return overtimePay(over_time_hours)+ base_hours_price;
// }
// console.log(calculateSalary(45));

// 6. Nested Functions & Conditions: Speed Check

function speedCheck(speed) {
  function speedCategory() {
    if (speed < 30 && speed > 0) {
      return "Slow";
    } else if (speed >= 30 && speed < 60) {
      return "Average";
    } else if (speed > 60) {
      return "Fast";
    } else {
      return "Invalid speed entered";
    }
  }
  return speedCategory();
}
console.log(speedCheck(0));
