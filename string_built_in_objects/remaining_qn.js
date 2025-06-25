// 13. Censor a Word in a Sentence
// Problem: Replace a given word with *** in a sentence.

let word = "He is rude";
console.log(word.replace("rude", "*"));

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
let r = "";
let Surround = r.concat(w).concat(r);

console.log(Surround);

//20. Convert Spaces to Dashes
// Problem: Replace all spaces in a sentence with dashes.

let q = "Learn javascript now";
console.log(q.replaceAll(" ", "-"));