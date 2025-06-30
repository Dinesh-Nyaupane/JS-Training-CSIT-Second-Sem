function diceRoll(){
    while(1){
    dice = Math.ceil(Math.random()*10);
    if(dice >=1 && dice <=6 ){
        console.log("Your dice roll is: " + dice)
        break;
    }
    else{
        return diceRoll();
    }
}
}
diceRoll();
