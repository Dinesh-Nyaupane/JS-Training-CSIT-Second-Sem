let coupon;
do
{ 
coupon=Math.floor(Math.random()*Math.pow(10,6));
}
while(coupon<100000)
console.log("Coupon code generated:"+coupon);