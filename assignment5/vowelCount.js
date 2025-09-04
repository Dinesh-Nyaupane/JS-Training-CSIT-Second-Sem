function vowelCOunt(word) {
  let lower = word.toLowerCase();
  length = word.length;

  let count = 0;
  for (i = 0; i < length; i++) {
    if (
      lower.slice(i, i + 1) === "a" ||
      lower.slice(i, i + 1) === "i" ||
      lower.slice(i, i + 1) === "o" ||
      lower.slice(i, i + 1) === "u" ||
      lower.slice(i, i + 1) === "e"
    ) {
      count++;
    }
  }
  return count;
}
let inputWord = "apple";
console.log(vowelCOunt(inputWord));
