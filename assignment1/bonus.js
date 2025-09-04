let salaryInput = parseInt(prompt("Enter your salary"));
let extraHour = parseInt(prompt("Enter extra working hours"));
function totalSalary(){
    return salaryInput + extraHour * 50
}
console.log("Total salary with bonus is Rs"+totalSalary())