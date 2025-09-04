function otp_generator() {
  num = Math.floor(Math.random()*10**6)
  while (true) {
    if (num >= 100000 && num <= 999999) {
      console.log("Your 6 digit otp is "+num);
      break;
    } else {
      return otp_generator();
    }
  }
}
otp_generator();
