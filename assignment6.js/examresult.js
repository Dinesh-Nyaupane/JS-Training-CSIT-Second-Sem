function examResult(marks1, marks2)
{
    function totalMarks()
    {
        return marks1+marks2;
    }
    if(totalMarks(marks1, marks2)>=50)
    {
        console.log("passed");
    }
    else
    {
        console.log("failed");
    }
}
examResult(30,25);
examResult(20,15);
