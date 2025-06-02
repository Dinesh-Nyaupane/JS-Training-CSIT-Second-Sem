function speedCheck(speed)
{
    function speedCategory()
    {
        if(speed<30)
        {
            return "Slow";
        }
        else if(speed>30 && speed<60)
        {
            return "Average";
        }
        else if(speed>60)
        {
            return "Fast";
        }
    }
    return speedCategory();
}
console.log(speedCheck(25));
console.log(speedCheck(45));
console.log(speedCheck(75));