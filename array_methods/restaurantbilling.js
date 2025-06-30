bill = [100,200,150,200,500]
billWithVAT = bill.map((num)=>{
     return num + 0.13*num;
})
sumOfPrices = billWithVAT.reduce((sum,curr) =>{
return sum+curr;
})
console.log(sumOfPrices)