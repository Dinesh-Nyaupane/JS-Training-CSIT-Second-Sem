/*
12. Mask the Username in an Email
Problem: Hide all characters in the email username except the first character.

Hint: Use .charAt(), .slice(), .repeat().

Sample Input: "john@example.com"

Sample Output: "j***@example.com"
*/

let email = "rohit@gmail.com";
let word;
let i;
for ( i = 0; i < email.length; i++){
if (email[i] == "@"){

word = email.slice(1,i);
let n = Number (i-1)
console.log(email.replace(word,"*".repeat(n)));
}
}
hh