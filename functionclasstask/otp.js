function otpGenerator() {
  return Math.floor(Math.random() * 900000)+100000;
}
console.log(otpGenerator());
