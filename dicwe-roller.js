function dice(){
    while(1){
    value= Math.ceil(Math.random()*10);
    if(value>=1 &&  value<=6){
        console.log("You got "+value+" points");
        break;
    }
    else{
     return dice();
    }
}
}
dice();