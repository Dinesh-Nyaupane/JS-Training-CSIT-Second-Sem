console.log("billing:")
let input=[100,200,150];
let vat=input.map(price=>price+price*(13/100));
console.log("the total bill is "+vat.reduce((sum,now)=>sum+now,0))