function first(a) {
  return a.charAt(0);
}
function last(a) {
  return a.charAt(a.length - 1);
}
let input = prompt("enter a string.");
console.log(
  "The first string is " +
    first(input) +
    " and the last string is " +
    last(input)
);
