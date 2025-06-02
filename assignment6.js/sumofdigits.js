function sumDigitsRecursive(num)
{
    if(num===0)
    {
        return 0;
    }
    else
    {
    return (num%10)+sumDigitsRecursive(parseInt(num/10));
    }
}
console.log(sumDigitsRecursive(1234));
