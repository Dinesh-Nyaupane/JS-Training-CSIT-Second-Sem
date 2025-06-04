function bankInterest(p,t,r){
    return p * Math.pow(1 + (r/100), t);
}
console.log("Final amount is " + bankInterest(10000,3,5,).toFixed(2));
