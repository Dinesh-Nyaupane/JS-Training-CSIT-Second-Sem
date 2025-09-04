function diceRoll()
{
    do
    {
        num=Math.ceil(Math.random()*10);
    }
    while(num>6)
    return num;
}
console.log(diceRoll());