let items = [2,3,4,5,6]
product = items.reduce((prod,currVal)=>{
    return prod*currVal;
})
console.log(product)