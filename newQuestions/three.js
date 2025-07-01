let price=[199,499,1299,850,350];
console.log("the maximum price is "+price.reduce((number1,number2)=>number1<number2?number2:number1,0))