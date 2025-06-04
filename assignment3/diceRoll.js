// Create a function that simulates rolling a 6-sided dice returning a random integer from 1 to 6.

function diceRoll(){
   return Math.ceil(Math.random()*6)
}
console.log(diceRoll())