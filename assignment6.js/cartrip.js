function tripTime(distance,speed)
{
    function convertToMinutes(hours)
    {
        let time;
        time=parseFloat(hour*60);
        return time;
    }
    let hour=distance/speed;
    return convertToMinutes(hour);
}
console.log(tripTime(120,60));