let input = " Sandesh Aryal   ";
function lowerWord(name) {
  function tripWord(word) {
    return word.trim();
  }
  return tripWord(name).toLowerCase();
}
console.log(lowerWord(input));

