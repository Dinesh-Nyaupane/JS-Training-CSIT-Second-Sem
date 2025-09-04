let enter=prompt("enter the string to reverse:");
function reverse(enter)
{
    let count=enter.length;
    var rev="";
    for(let i=count-1;i>=0;i--)
    {
        rev=rev+enter[i];
    }
    return rev;
}
console.log("the reverse of the string is "+reverse(enter));