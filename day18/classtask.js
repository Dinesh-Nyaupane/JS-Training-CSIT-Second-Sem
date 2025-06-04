function areaCircle()
{
    let a=prompt("Enter a radius: ");
    if(isFinite(a))
    {
        
        let area=Math.PI*Math.pow(a,2);
        return area.toFixed(2);

    }
}
console.log("The area of circle is: "+areaCircle());