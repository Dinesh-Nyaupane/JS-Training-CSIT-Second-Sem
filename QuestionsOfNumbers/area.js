function areaCircle()
{
    let r=Number(prompt("enter the radius"));
    if(isFinite(r))
    {

        let area=Math.PI*Math.pow(r,2);
        console.log(area.toFixed(2));
    }
    else
    {
        return "error";
    }
}

areaCircle();