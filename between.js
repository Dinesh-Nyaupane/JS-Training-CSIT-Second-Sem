function betweenNumbers()
{
    let a=parseInt(prompt("enter the starting number"));
    let b=parseInt(prompt("enter the ending number"));
    let c=0;
    for(let i=a+1;i<b;i++)
    {
        c++;
    }
    return c;
}
console.log("the number of digits between numbers is"+betweenNumbers());