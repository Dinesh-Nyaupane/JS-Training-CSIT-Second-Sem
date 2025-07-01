function generateOTP() {
  const otp = Math.floor(100000 + Math.random() * 900000);
  return "Generated OTP is " + otp;
}console.log(generateOTP());