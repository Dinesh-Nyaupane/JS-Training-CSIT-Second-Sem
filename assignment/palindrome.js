let enter=prompt("enter the string to check palindrome:");
function palindrome(enter)
{
    let count=enter.length;
    var rev="";
    for(let i=count-1;i>=0;i--)
    {
        rev=rev+enter[i];
    }
    if(rev===enter)
    {
        let a="palindrome";
        return a;
    }
    else
    {
        let b="not palindrome";
        return b;
    }
}
console.log("the reverse of the string is "+palindrome(enter));