function generateCouponCode() {
  const code = Math.floor(100000 + Math.random() * 900000);
  return "Coupon code generated: " + code;
}

console.log(generateCouponCode()); 