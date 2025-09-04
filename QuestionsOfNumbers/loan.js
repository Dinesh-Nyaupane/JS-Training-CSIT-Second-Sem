let income=Number(prompt("enter your income:"));
let expense=Number(prompt("enter your expenses:"));
if(income>(3*expense))
{
    let a=true;
    console.log("Loan eligibility: "+a);
}
else
{
    let a=false;
    console.log("Loan eligibility: "+a);
}