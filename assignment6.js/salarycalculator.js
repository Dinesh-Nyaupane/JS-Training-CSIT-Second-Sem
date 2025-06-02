function calculateSalary(hoursWorked)
{
    let pay=0;
    function overtimePay(hours)
    {
        return hours*15;
    }
    if(hoursWorked<=40)
    {
        pay=hoursWorked*10;
    }
    else if(hoursWorked>40)
    {
        hours=hoursWorked-40;
        pay=40*10+overtimePay(hours);
    }
    return pay;
}
console.log(calculateSalary(45));