let enter=prompt("enter the string:");
function cut(enter)
{
    return enter.trim();
}
console.log("the string after removing spaces from front and end"+"'"+enter+"'"+" is"+ "'"+cut(enter)+"'");