// // // // // // // // // // // ///////area of circle//
// // // // // // // // // // // let num=prompt(parseFloat("Enter the number"))
// // // // // // // // // // // let area=Math.PI*Math.pow(num,2)
// // // // // // // // // // // console.log(area.toFixed(2));


// // // // // // // // // ////opt generator///

// // // // // // // // // console.log(Math.floor(Math.random()*900000+100000))



// // // // // // // // // // //////Dice roll///
// // // // // // // // // // console.log(parseInt(Math.random()*6+1))


// // // // // // // // /////fuel consumtion//
// // // // // // // // let fuel=prompt(parseFloat("Enter the fuel consumption"))
// // // // // // // // let Distance=prompt(parseFloat("Enter the distance travelled"))
// // // // // // // // let runs=Distance/fuel;
// // // // // // // // console.log(runs.toFixed(2))
// // // // // // // //// E = P x R x (1+r)^n/ ( (1+r)^N – 1///


// // // // // // // ///////EMI calculator///
// // // // // // // // let p=prompt(parseFloat("Enter the principal"))
// // // // // // // // let r=prompt(parseFloat("Enter the rate"))
// // // // // // // // let t=prompt(parseFloat("Enter the time"))

// // // // // // // // let E=p*r*Math.pow((1+r,t))/Math.pow((1+r,t-1))
// // // // // // // // console.log(E)


// // // // // // // /////°F = (°C × 9/5) + 32///
// // // // // // // ////Temperature converter///
// // // // // // // let Temperature=parseFloat(prompt("Enter the temperature"))
// // // // // // // function converter(temp)
// // // // // // // {
// // // // // // //     let fahrenheit=(temp*9/5)+32
// // // // // // //     return fahrenheit.toFixed(2);
// // // // // // // }
// // // // // // // console.log(converter(Temperature));


// // // // // // //////random coupon code///
// // // // // // ////console.log(Math.floor(Math.random()*900000+100000))///


// // // // // // /////electricity bill calculator//
// // // // // // let unit=parseInt(prompt("Enter the unit"))
// // // // // // function electricity(bill)
// // // // // // {
// // // // // //     if(unit>=0&&unit<=100)
// // // // // //     {
// // // // // //         return(unit*5);
// // // // // //     }
// // // // // //     else if(unit>=101&&unit<=200)
// // // // // //     {
// // // // // //         return(100*5+(unit-100)*7)
// // // // // //     }
// // // // // //     else if(unit>200)
// // // // // //     {
// // // // // //         return(100*5+100*7+(unit-200)*10)
// // // // // //     }
// // // // // // }
// // // // // // console.log(electricity(unit))


// // // // // /////dice re-roll////
// // // // // let roll=parseInt(Math.random()*6+1)
// // // // // console.log(roll)
// // // // // if(roll==1)
// // // // // {
// // // // //     console.log(parseInt(Math.random()*6+1))
// // // // // }

// // // // ////Grade calculator//

// // // // function Grade(marks)
// // // // {
// // // //     if(marks>=80&&marks<=100)
// // // //     {
// // // //         return("A")
// // // //     }
// // // //      else if(marks>=60&&marks<=79)
// // // //     {
// // // //         return("B")
// // // //     }
// // // //      else if(marks>=40&&marks<=59)
// // // //     {
// // // //         return("C")
// // // //     }
// // // //      else if(marks>=20&&marks<=30)
// // // //     {
// // // //         return("D")
// // // //     }
// // // //      else if(marks>=0&&marks<=19)
// // // //     {
// // // //         return("F")
// // // //     }
// // // //     else{
// // // //         return("Invalid result")
// // // //     }
// // // // }
// // // // let marks=parseInt(prompt("Enter the marks"))
// // // // console.log(Grade(marks))



// // // //////Bank interest calculator//

// // // function intcal(p,t,r)
// // // {
// // // let Inte=(p*t*r)/100;
// // // let amount=p+Inte;
// // // return(amount.toFixed(2))

// // // }
// // // let p=parseFloat(prompt("Enter the Principal"))
// // // let t=parseFloat(prompt("Enter the Rate"))
// // // let r=parseFloat(prompt("Enter the Time"))
// // // console.log(intcal(p,t,r))


// // ////// BMI = weight (kg) / height² (meters)////


// // ///////BMI calculator//


// // function cal(w,h)
// // {
// // let bmi=w/Math.pow(h,2);
// // return (bmi.toFixed(1));
// // }
// // let w=parseFloat(prompt("Enter the weight"))
// // let h=parseFloat(prompt("Enter the height"))
// // console.log(cal(w,h))


// /////Maximum transaction finder///
// function max(num1,num,num2)
// {
//     return(Math.max(num1,num,num2))
// }
// let num1=parseFloat(prompt("Enter the first deposit"))
// let num=parseFloat(prompt("Enter the second deposit"))
// let num2=parseFloat(prompt("Enter the Third deposit"))
// console.log(max(num1,num,num2));



