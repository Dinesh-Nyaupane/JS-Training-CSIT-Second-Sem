//Question 1 count total character
let input="Javascript is fun!"
console.log(input.length);


//Question 2 get the 1st and last character
let char="coding"
console.log(char.charAt(0));
console.log(char.charAt(char.length - 1));


// question 3 convert a word to uppercase
let word="javascript"
console.log(word.toUpperCase());

// Question 4 convert a word to lowercase
let word1="HELLO"
console.log(word1.toLowerCase());

// Question 5 Remove extra space around text
let space="  Welcome to coding!  "
console.log(space.trim());


// Question 6 Extract char from a string using slice
let slice="developer"
console.log(slice.slice(1,5));

// Question 7 extract char using substring
let word2="student"
console.log(word2.substring(2,5));

// Question 8 repeat a word multiple times
let word3="karuna"
console.log(word3.repeat(5));


// Question 9 replace a specific word in a sentence
let word4="This is a bad day"
console.log(word4.replace("bad" , "good"));

// Question 10 join two words together
let word5="Happy"
let word6="Day"
console.log(word5.concat(word6));


// Question 11 Normalize a user name
let letter="Alice SMITH"
console.log(letter.trim().toLowerCase());


// Question 12 Mask the username in an email
// let letter1="karuna@example.com"
// console.log(letter1.charAt(0)+ "*".repeat(letter1.length-1).slice(6 ));


// Question 13 censor a word in a sentence
let letter2="He is rude"
console.log(letter2.replace("rude", "****"));


// Question 14 check if a word ends with ing
let letter3="running"
console.log(letter3.endsWith("ing"));


// Question 15 make a word excited
let letter5="wow"
console.log(letter5.toUpperCase()+ "-"+ letter5.toUpperCase());


// Question 16 Create a Short Code
let code="developer"
console.log(code.slice(0,3).toUpperCase());

























