let p=parseFloat(prompt("enter the principle"));
let rate=parseFloat(prompt("enter the rate"));
let time=parseFloat(prompt("enter the time"));
let r=parseFloat(rate)/(12*100);
let m=parseFloat(time)*12;
let interest=(p*r*Math.pow(1+r,m))/(Math.pow(1+r,m)-1);
let emi=Math.round(interest);
console.log(emi);