let grade=parseFloat(prompt("enter the grade obtained:"));
if(isFinite(grade) && grade<=100)
{
    if(grade>=80 && grade<=100)
    {
        console.log("score "+grade+"corresponds to grade A");
    }
    else if(grade>=60 && grade<=79)
    {
        console.log("score "+grade+" corresponds to grade B");
    }
    else if(grade>=40 && grade<=59)
    {
        console.log("score "+grade+" correponds to grade C");
    }
    else if(grade>=20 && grade<=39)
    {
        console.log("score "+grade+" corresponds to grade D");
    }
    else if(grade>=0 && grade<=19)
    {
        console.log("score "+grade+" corresponds to grade F");
    }
}
else
{
    let a=false;
    console.log(a);
}