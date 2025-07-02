

function random(){
    otp = Math.trunc(Math.random()*900000)+100000;
    otp += "";
    return otp;
}

let result = random();
console.log(`Generated  coupon is ${result}`)