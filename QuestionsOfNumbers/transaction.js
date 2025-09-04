let first,second,third;
first=Number(prompt("enter the first transaction amount:"));
second=Number(prompt("enter the second transaction amount:"));
third=Number(prompt("enter the third transaction amount"));
if(isNaN(first) && isNaN(second) && isNaN(third))
{
    console.log("None inputs were number");
}
else if(isNaN(first,second))
{
    console.log("Maximum valid transaction amount is"+third);
}
else if(isNaN(second,third))
{
    console.log("Maximum valid transaction amount is"+first);
}
else if(isNaN(first,third))
{
    console.log("Maximum valid transaction amount is"+second);
}
else if(isNaN(first))
{
    console.log("Maximum valid transaction amount is"+Math.max(second,third));
}
else if(isNaN(second))
{
    console.log("Maximum valid transaction amount is"+Math.max(first,third));
}
else if(isNaN(third))
{
    console.log("Maximum valid transaction amount is"+Math.max(first,third));
}
else
{
    console.log("Maximum valid transaction amount is"+Math.max(first,second,third));
}