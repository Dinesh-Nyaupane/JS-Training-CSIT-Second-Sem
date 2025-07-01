// //wap to print the sum of array of given elements
// let a=[10,20,2,5,7,9,8,31,42,99,30,17]
// let sum = 0;
// for (let i = 0; i < a.length; i++) {
//   sum += a[i];
// }
// console.log("Sum of array elements:" ,sum);


// //print all the even number and their sum
// let a=[10,20,2,5,7,9,8,31,42,99,30,17]
// let sum = 0;
// for (let i = 0; i < a.length; i++) {
//     if(a[i]%2==0){
//         sum=sum+a[i];
//     }
// }
// console.log("Sum of array elements:" ,sum);


// //print all the odd number and their sum
// let a=[10,20,2,5,7,9,8,31,42,99,30,17]
// sum=0;
// for(let i=0;i<a.length;i++){
//     if(a[i]%2!=0){
//         sum+=a[i]
//     }
// }
// console.log("odd numbers sum is:",sum)


// check if the numbers provided by user exist in array or not
// let a = [10, 20, 2, 5, 7, 9, 8, 31, 42, 99, 30, 17];
// let b = prompt("Enter a number:");
// let num=Number(b);
// if (a.includes(num)) {
//   console.log(num + " exists in the array.");
// } else {
//   console.log(num + " does NOT exist in the array.");
// }

// let a = [10, 20, 2, 5, 7, 9, 8, 31, 42, 99, 30, 17];
// let b = prompt("Enter a number:");
// let num = Number(b);
// let found = false;

// for (let i = 0; i < a.length; i++) {
//   if (num === a[i]) {
//     found = true;
//     break; // Exit the loop once found
//   }
// }
// if (found) {
//   console.log("The number is in the array.");
// } else {
//   console.log("It's not in the array.");
// }


//to check whether the first and last elemts are same and print their sum
let array = [3,2,1,4,16,20,7,22,44,7,3,2,3]
let b= array.length-1
if(array[0]==array[b]){
    console.log("equal")
  let sum= array[0]+array[b];
    console.log(sum)
}


//print elemts in reverse without reversing aray
// let a= [3,2,1,4,16,20,7,22,44,7,3,2,3]
// for (let i= a.length - 1; i >= 0; i--) {
//   console.log(a[i]);
// }

//count how many times 3 appears
let a= [3,2,1,4,16,20,7,22,44,7,3,2,3]
let count=0;
for (let i=0; i<a.length; i++){
    if(a[i]==3){
        count+=1;
    }
}
console.log(count+" times 3 appeared")

//find maximum and minimum