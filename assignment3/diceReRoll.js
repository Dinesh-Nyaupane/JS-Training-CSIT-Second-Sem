// Create a function that simulates rolling a 6-sided dice returning a random integer from 1 to 6.

function diceRoll(){
   return Math.ceil(Math.random()*6)
}
if (diceRoll() == 1){
    console.log("First roll : 1")
    console.log("Second roll : " + diceRoll())
}
else{
    console.log("Dice Roll : " + diceRoll());
}