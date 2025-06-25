let enter=prompt("enter the string:");
function checkVowel(enter)
{
    let count=enter.length,number=0;
    for(let i=0;i<count;i++)
    {
        if(enter[i]==="a" || enter[i]==="e" || enter[i]==="i" || enter[i]==="o" || enter[i]==="u")
        {
            number=number+1;
        }
    }
    return number;
}
console.log("the number of vowels " +checkVowel(enter));