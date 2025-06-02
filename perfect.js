function perfectSquare()
{
    let n=parseInt(prompt("enter the number"));
    let c=0;
    if(n==1)
    {
        c++;
    }
    for(i=1;i<=(n/2);i++)
    {
        if(i*i==n)
        {
            c++;
        }
    }
    return (c==1);
}
console.log(perfectSquare());