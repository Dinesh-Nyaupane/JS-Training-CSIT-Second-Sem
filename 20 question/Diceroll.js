function Dice(){
    let value = Math.ceil(Math.random()*6);
    return value;
}

let result = Dice();
console.log(`Dice roll result is ${result}`)

// let ans = 6.;
// console.log(Math.floor(ans));
// console.log(Math.ceil(ans));