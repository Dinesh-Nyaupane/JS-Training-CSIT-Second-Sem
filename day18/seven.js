// Calculate bill based on slab rates:

function bill(units){
if (units>=0 && units<=100)
{
    return units*5;
}
else if(units>=101 && units<=200)
{
 return (100*5)+(units-100)*7;
}
else if(unit>200)
{
    return (100*5)+(200*7)+(units-200)*10;
}
}
console.log(bill(150))