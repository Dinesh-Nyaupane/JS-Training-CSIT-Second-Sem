function otpGenerator(){
    while(1){
    otp = parseInt(Math.random()*10000000);
    if (otp >= 100000 && otp <= 999999){
       console.log("The otp is " + otp) ;
       break;
    }
    else{
        return otpGenerator()
    }
    }
}
otpGenerator()
