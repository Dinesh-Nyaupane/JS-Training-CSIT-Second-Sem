function diceGame() {
  let first = Math.ceil(Math.random() * 6);
  if (first === 1) {
    let second = Math.ceil(Math.random() * 6);
    return `First roll: 1, re-roll: ${second}`;
  } else {
    return `First roll: ${first}`;
  }
}
