// question no 1 Sum of Digits

// function sum(a) {
//   let sum = 0;
//   while (a != 0) {
//     let remainder = a % 10;
//     sum += remainder;
//     a = parseInt(a / 10);
//   }
//   return sum;
// }
// let a = parseInt(prompt("Enter the digits"));
// console.log(sum(a));

// question no 2 Count Even Numbers Between Two Values

// function countt(a, b) {
//     let count = 0;
//     for (let i = a; i <= b; i++) {
//         if (i % 2 == 0) {
//             count++;
//         }
//     }
//     return count;
// }

// let a = parseInt(prompt("Enter the starting number"));
// let b = parseInt(prompt("Enter the ending number"));
// console.log(countt(a, b));

// question no 3. Check if a Number is a Perfect Square

// function persq(a) {
//     let y = a ** 0.5;
//     let c = parseInt(y);
//     if (y === c) {
//         console.log("The number is a perfect square");
//     } else {
//         console.log("The number is not a perfect square");
//     }
//     return y;
// }

// let a = parseInt(prompt("Enter the number"));
// console.log(persq(a));

// Question no 4. Calculate salary with extra hours

// function salary(sal, hours) {
//     sal = sal + hours * 50;
//     return sal;
// }

// let sal = parseInt(prompt("Enter the salary"));
// let hours = parseInt(prompt("Enter the number of extra hours worked"));
// console.log(salary(sal, hours));

// Question no 5. Function Scope and Variable Shadowing

let a = 10;
function test() {
  let a = 5;
  if (true) {
    let a = 20;
    console.log(a); /* 20 because the value of a is defined as 20 within
                           the if block */
  }
  console.log(a); /* 5 because 20's scope is within if
                     and a was declared as 5 in function block */
}
test();
console.log(a); // 10 because of the global scope of a=10
