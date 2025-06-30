let enteredWord=prompt("enter the string:");
let check=prompt("enter the character to check the frequency:");
function checkFrequency(enteredWord,check)
{
    let len =enteredWord.length,  number=0;
    for(let i=0;i<len;i++)
    {
        if(enteredWord[i] === check)
        {
            number++;
        }
    }
    return number;
}
console.log("the number of "+check+" is " +checkFrequency(enteredWord,check));
