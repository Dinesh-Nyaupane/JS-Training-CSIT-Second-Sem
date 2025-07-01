function diceGame() {
  const firstRoll = Math.ceil(Math.random() * 6);
  if (firstRoll !== 1) return "First roll: " + firstRoll;

  const secondRoll = Math.ceil(Math.random() * 6);
  return "First roll: 1, re-roll: " + secondRoll;
}

console.log(diceGame()); 