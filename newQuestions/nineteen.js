let input=[4,6,8,11,15];
function isPrime(num)
{
    if(num<2)
    {
        return false;
    }
    for(let i=2;i<=num/2;i++)
    {
        if(num%i==0)
        {
            return false;
        }
        else
        {
            return true;
        }
    }
}
let prime=input.find(isPrime);
if(prime)
{
    console.log(`First prime: ${prime}`)
}