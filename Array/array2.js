// 1. Count Total Characters in a String

// Problem: Write a function that returns the total number of characters in a given string, including spaces and punctuation.

function charCount(characters) {
  return characters.length;
}
let charac = "Javascript is fun!";
console.log(charCount(charac));

// //2. Get the First and Last Character
// Problem: Return the first and last character of a string.

let a = "coding";
console.log(a.charAt(0), a.charAt(a.length - 1));

// 3. Convert a Word to Uppercase
let b = "javascript";
console.log(b.toUpperCase());

// 4. Convert a Word to Lowercase

let c = "JAVASCRIPT";
console.log(c.toLowerCase());

// 5. Remove Extra Spaces Around Text
// Problem: Remove leading and trailing spaces from a string.

let d = " welcome to dilip's home! ";
console.log(d.trim());

// 6. Extract Characters from a String Using Slice
// Problem: Extract a substring from the 2nd to 5th character (not including 5th)

let e = "developer";
console.log(e.slice(1, 5));

// 7. Extract Characters Using Substring
// Problem: Extract characters between index 2 and 5.

let f = "student";
console.log(f.substring(2, 5));

// 8. Repeat a Word Multiple Times
// Problem: Repeat a word 3 times.

let g = "Hi_dilip";
console.log(g.repeat(3));

// 9. Replace a Specific Word in a Sentence
// Problem: Replace the word "bad" with "good" in a sentence.

let h = "It is a bad day";
console.log(h.replace("bad", "good"));

// 10. Join Two Words Together
// Problem: Combine two words into one.

let str1 = "Dilip";
let str2 = "Belbase";

console.log(str1.concat(str2));

// 11. Normalize a User’s Name
// Problem: Trim and convert a name to lowercase.

let i = " DILIP BELBASE ";
console.log(i.trim().toLowerCase());

// 12. Mask the Username in an Email
// Problem: Hide all characters in the email username except the first character.

// 13. Censor a Word in a Sentence
// Problem: Replace a given word with *** in a sentence.

let word = "He is rude";
console.log(word.replace("rude", "***"));

// 14. Check if a Word Ends with "ing"
// Problem: Check if the string ends with "ing".

function Checkword(word) {
  return word.endsWith("ing");
}
console.log(Checkword("running"));

// 15. Make a Word Excited
// Problem: Convert a word to uppercase and repeat it twice, separated by -.

let k = "wow";
let k1;

k1 = k.concat("-").toUpperCase();
k1 = k1.concat(k).toUpperCase();
console.log(k1);

//16. Create a Short Code
// Problem: Return the first 3 letters of a word in uppercase.

let l = "developer";
let result = l.slice(0, 3).toUpperCase();
console.log(result);

// 17. Starts with a Specific Letter
// Problem: Check if a word starts with the letter "A" or "a".

let m = "Apple";
let check = m.toUpperCase().startsWith("A");
console.log(check);

// 18. Format Greeting Using Name
// Problem: Return a greeting in the format: "Hello, NAME!" with name in uppercase.

let s1 = "Hello,";
let s2 = "dilip!";

let mix = s1.concat(" ", s2.toUpperCase());
console.log(mix);

// 19. Emphasize a Word with Symbols
// Problem: Surround the word with ** on both sides.

let w = "cool";
let r = "**";
let Surround = r.concat(w).concat(r);

console.log(Surround);

//20. Convert Spaces to Dashes
// Problem: Replace all spaces in a sentence with dashes.

let q = "Learn javascript now";
console.log(q.replaceAll(" ", "-"));