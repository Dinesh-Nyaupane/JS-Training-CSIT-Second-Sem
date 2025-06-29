// //String object in js.
// //property
// let username = " DInesh Nyaupane ";

// //length properNepathyaty
// console.log(username.length);

// //Methods
// //--> Character access methods
// /*
// charAt(index) -> returns the character at the given index of string
// charCodeAt(index) //assignment
// charPointAt(index) //assignment
// */
// console.log(username.charCodeAt(0));

// // Case conversion methods
// /*
// toLowerCase()
// toUpperCase()
// */
// console.log(username.toUpperCase());

// //Splitting and trimming methods
// /*
// split(seperator) --> seperate string based on separator provided
// trim()-> removes white space from both ends
// trimStart()->
// trimEnd()->
// */
// console.log(username.split(" "));
// console.log(username);
// console.log(username.trim());

// let nameValue = "D,i,n,e,s,h";
// console.log(nameValue.split(","));
// let splittedString = nameValue.split(",");
// console.log(typeof splittedString);

//String Manipulation methods
/* 
concat(string) concatinates string with another.
slice(start, end)
subString(start, end)
subStr(start,length)--> no more in use
repeat(count)
padStart(targetLength, padString) //assignment
padEnd(targetLength, padString) //assignment
*/

// let str1 = "Nepathya";
// let str2 = "College";
// console.log(str1.concat(str2));
// console.log(str1.slice(2, 5));
// console.log(str1.substring(2, 5));
// console.log(str1.substr(2, 5));
// console.log(str1.repeat(10));

//Search
/*
indexOf(substring);
lastIndexOf(substring);
includes(substring);
startsWith(substring);
endsWith(substring);
replace(searchValue, replaceValue);
replaceAll(searchValue, replaceValue); 
*/
// let district = "Palpa";
// console.log(district.lastIndexOf("a"));
// console.log(district.replaceAll("a", "n"));

// /* 
// Write a program to replace all the white spaces with the hyphens.
// let message = "Hello Everyone! I am from Tansen Palpa"

// Write a program ask the country name from user and check whether it starts with "A/a" and ends with "a/A"
// let country = " Argentina " / "Argentina" 
// let lower_country = country.toLowerCase();
// let trimmed_country=lower_country.trim();
// if(trimmed_country.startsWith("a")&&trimmed_country.endsWith(a)){
// console.log("Yes! the country starts and ends with a/A")
// }
// */
// // Write a program to check the occurence of character in an string.
// let string = "Anaconda";
// let count = 0;
// for (let i = 0; i < string.length; i++) {
//   if (string[i].toLowerCase() === "a") {
//     count += 1;
//   }
// }
// console.log("A is repeating " + count + " times");


//charCodeAt
let username = "Dinesh"
console.log(username.charAt(0))
console.log(username.charCodeAt(0))
console.log(username.codePointAt(0))

let num = "52211"
console.log(num.padStart(6,"A"))
