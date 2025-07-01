itemPrice = [80,70,100,50,60]

expensiveItem = itemPrice.reduce((acc,currVal) => {
    currVal>acc? currVal : acc
return acc;
} )
console.log("The expensive item is of: Rs." + expensiveItem)
