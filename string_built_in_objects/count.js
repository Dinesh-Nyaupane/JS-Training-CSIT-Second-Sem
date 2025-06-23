/* 
1. Count Total Characters in a String
Problem: Write a function that returns the total number of characters in a given string, including spaces and punctuation.

Hint: Use the .length property.

Sample Input: "JavaScript is fun!"

Sample Output: 18
*/
function stringLength(){
let message = prompt("Enter a string");
console.log("The length of the string is: " + message.length);
}
stringLength();