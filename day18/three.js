// Create a function that simulates rolling a 6-sided dice returning a random integer from 1 to 6.

function diceRolling(){
    let fate=Math.ceil(Math.random()*6);
    return fate;
}
console.log(diceRolling())