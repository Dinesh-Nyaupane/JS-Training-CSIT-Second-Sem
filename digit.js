function digitCount()
{
    let n=parseInt(prompt("enter the number"));
    let c=0;
    while(n>0)
    {
        c++;
        n=parseInt(n/10);
    }
    return c;
}
let n;
console.log("the number of digits is "+digitCount());
