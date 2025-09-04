/*
12. Mask the Username in an Email
Problem: Hide all characters in the email username except the first character.

Hint: Use .charAt(), .slice(), .repeat().

Sample Input: "john@example.com"

Sample Output: "j***@example.com"
*/
let email = "bag@gmail.com";
function mail() {
  for (i = 0; i < email.length; i++) {
    if (email[i] == "@") return i;
  }
}
word = email.slice(1, mail());
console.log(email.replace(word, "*".repeat(mail()-1)));
