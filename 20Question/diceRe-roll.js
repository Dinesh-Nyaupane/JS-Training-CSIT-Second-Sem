let dice,reroll,first,second;
do
{
    dice=Math.ceil(Math.random()*10);
}
while(dice>6)

    if(dice!=1)
    {
        first=dice;
        console.log("first roll:"+first);
    }
else if(dice==1)
{
    first=dice;
    console.log("first roll:"+first);
do
{
    reroll=Math.ceil(Math.random()*10);
}
while(reroll>6)
    second=reroll;
    console.log("re-roll:"+second);
}