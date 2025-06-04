function otpGenerator()
{

    let otp=(Math.trunc(100000+Math.random()*900000))
    return otp;
}
console.log(otpGenerator())