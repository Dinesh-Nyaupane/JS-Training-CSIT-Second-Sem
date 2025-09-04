let enter=prompt("enter the word:");
function first(enter)
{
    return enter.charAt(0);
}
function last(enter)
{
    return enter.charAt(enter.length-1);
}
console.log("the first letter is "+first(enter)+" and"+" the last letter is "+last(enter));