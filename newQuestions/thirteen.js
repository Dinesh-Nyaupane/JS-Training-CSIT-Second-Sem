let stock=[true, true, false, true]
let after=stock.some(((abc)=>abc==="true"))
if(after)
{
    console.log(`Some items are out of stock`);
}
else
{
    console.log(`all items are in stock`)
}