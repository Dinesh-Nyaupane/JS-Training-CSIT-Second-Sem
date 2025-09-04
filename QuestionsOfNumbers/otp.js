function otpGenerator()
{
    do
    {
        num=Math.floor(Math.random()*Math.pow(10,6));
    }
    while(num<100000)
    return num;
}
console.log(otpGenerator());