function randomOtp() {
  return Math.floor((Math.random() * 900000) + 100000);
}
console.log("Your otp is : " + randomOtp());
