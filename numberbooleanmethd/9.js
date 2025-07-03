 
//  Roll a dice once; if 1, roll again and return second result; else return first.

 function rollDice()
 {
 let fate=Math.ceil(Math.random()*6);
 console.log("First roll: "+fate);
  if(fate==1)
 {
    rollDice();
 }
}
rollDice()
 
 

