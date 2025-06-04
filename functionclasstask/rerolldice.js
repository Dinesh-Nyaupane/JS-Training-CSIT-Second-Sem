function reRollDice() {
  let output = Math.floor(Math.random() * 6 + 1);
  while (output === 1) {
    console.log("1 so re-rolling");
    output = Math.ceil(Math.random() * 6);
  }
  return output;
}
console.log(reRollDice());
