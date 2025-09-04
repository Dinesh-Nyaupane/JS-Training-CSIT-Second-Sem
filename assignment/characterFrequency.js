let enter=prompt("enter the string:");
let check=prompt("enter the character to check the frequency:");
function checkFrequency(enter,check)
{
    let count=enter.length,number=0;
    for(let i=0;i<count;i++)
    {
        if(enter[i]===check)
        {
            number=number+1;
        }
    }
    return number;
}
console.log("the number of "+check+" is " +checkFrequency(enter,check));