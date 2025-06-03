function fuelConsumption(distance){
    fuelConsume = Number(distance/12.68)
    return fuelConsume.toFixed(2)
}
while(1){
distance = Number(prompt("Enter distance in km"))
if (isFinite(distance) && !isNaN(distance)){
    console.log("The fuel consumed is: "+fuelConsumption(distance)+"L")
    break;
}
else{
    console.log("Invalid distance format..! Please input again....!!")
}
}
