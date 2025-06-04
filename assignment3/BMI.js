function bmi(m,h){
    if (!isFinite(m,h)){
        return Boolean(null);
    }
    else 
    {
        return m/(h*h);
    }
}
let mass = Number(prompt("Enter your body weight"));
let height = height(prompt("Enter your height"));
console.log("Your BMI is " + bmi(mass,height));