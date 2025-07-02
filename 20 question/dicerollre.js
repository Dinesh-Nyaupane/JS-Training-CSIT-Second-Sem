//incomplete

let rolled = 0;

function value(){ 
    let roll = Math.floor(Math.random()*6)+1
    return roll 
};
rolled = value();
while(rolled==1){
    console.log(rolled);
    rolled = vlaue();
}
