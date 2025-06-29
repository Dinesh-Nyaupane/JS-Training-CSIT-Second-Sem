function fuel_consume(){
    let s =Number(prompt("Enter distance travelled in km: "))
    consume=0;
    if(isFinite(s)){
     consume= 1/12.68*s
     return consume.toFixed(2); 
    }
}
console.log("Fuel consumption is "+fuel_consume() +"km/l")