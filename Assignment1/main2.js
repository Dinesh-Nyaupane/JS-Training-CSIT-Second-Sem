//  //Nested Functions: Car Trip Time Estimator

// function tripTime(distance, speed) {
//   function convertToMinutes(hours) {
//     return hours * 60;
//   }
//   let hours = distance / speed;
//   return convertToMinutes(hours);
// }
// console.log(tripTime(120, 60)); 



//  // sum using recursive function
// function sumDigitsRecursive(num) {
//   if (num === 0) {
//     return 0;
//   }
//   return (num % 10) + sumDigitsRecursive(Math.floor(num / 10));
// }
// console.log(sumDigitsRecursive(1234)); 





// //write a function examresult(marks1,marks 2) that retur passed if total marks >=50
// /*else failes . inside it define a nested function totalmarsks()
// that sum marks1 an dmarks2*/

// function examResult(marks1 , marks2){
//     function totalMarks(){
//   let total = marks1 + marks2 ;
//   return total;
// }
// if(totalMarks()>=50){
//     return "passed";
// }
// else{
//     return "failed";
// }
// }
// console.log(examResult(10 , 40))




// /*
// write  recursice function factorialRecursive(n)to compute facotrial of n
// */
// function factorialRecursive(n){
//     if(n == 0 ){
//         return 1
//     }
//     else{
//         return n * factorialRecursive(n-1)
//     }
// }
// console.log(factorialRecursive(5))




// /*
// Write a function calculateSalary(hoursWorked) that calculates salary based on:
// Inside it, define a nested function overtimePay(hours) that calculates pay for overtime hours.
// First 40 hours paid at $10/hour
// Hours beyond 40 paid at $15/hour
// */

// function calculateSalary(hourWorked) {
//   function overtimePay(hours) {
//     let total = hours * 15 + 40 * 10;
//     return total;
//   }
//   if (hourWorked <= 40) {
//     return hours * 10;
//   } 
//   else {
//     let extra = hourWorked - 40;
//     return overtimePay(extra);
//   }
// }
// console.log(calculateSalary(45));



// // Nested Function with Conditions: Exam Result

//  function examResult(marks1, marks2) {
//   let total_mark = marks1 + marks2;
//   function totalMarks() {
//     if (total_mark >= 50) {
//       return "passed";
//     } else {
//       return "failed";
//     } }
//   return totalMarks();
// }
// console.log(examResult(25, 35)); 

