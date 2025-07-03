// <!-- Return grade (A-F) based on score 0-100; false for invalid.
// Grade Mapping:
// 80–100: A
// 60–79: B
// 40–59: C
// 20–39: D
// 0–19: F -->

function grade(marks)
{
    if(isFinite(marks) && (isNaN(marks)==false)  )
    {
        if(marks>=80 && marks<=100)
        {
            return "A";
        }
        else if(marks>=60 && marks<=79)
        {
            return "B"
        }
        else if(marks>=40 && marks<=59)
        {
            return "C"
        }
        else if(marks>=20 && marks<=39)
        {
            return "D"
        }
        else if(marks>=0 && marks<=19)
        {
            return "F";
        }
        
        
    }
    else {
            return false;
        }
}

let a=parseFloat(prompt("Enter a Marks: "));
console.log("Score "+a+" corresponds to grade "+ grade(a))