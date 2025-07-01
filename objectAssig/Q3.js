function rollDice() {
  const result = Math.ceil(Math.random() * 6);
  return "Dice roll result: " + result;
}
console.log(rollDice());