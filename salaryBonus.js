function salaryBonus()
{
    let basicsalary=parseFloat(prompt("enter the basic salary:"));
    let extrahours=parseFloat(prompt("enter the extra hours worked:"));
    basicsalary=basicsalary+extrahours*50;
    return basicsalary;
}
console.log("your salary with added bonus:"+salaryBonus());