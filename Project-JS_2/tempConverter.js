/**------------------------ */
// LOGIC FOR CONVETING C to F (defalult)
let temp1 = document.getElementById("tempBOX1");
let submitbtn = document.getElementById("submitbtn");
let output = document.getElementById("output");
let result ;
submitbtn.addEventListener("click", ()=>
    {
        // temp1 = celcius
         result = (temp1.value * 1.8) + 32 ;
        output.textContent = result.toFixed(2) ;
    })
    
    /**------------------------ */
    // LOGIC FOR SWITCH BUTTON( F to C)
    let switchbtn = document.getElementById("switchbtn");
    let degreeSpan = document.getElementById("degreeSpan");
    let FahrenheitSpan = document.getElementById("FahrenheitSpan");
    let tempBOX2 = document.getElementById("tempBOX2")
    let units = document.getElementById("units");
    switchbtn.addEventListener("click", ()=>
        {
    let temp2 = document.getElementById("tempBOX1");
    let temp = degreeSpan.textContent ;
    degreeSpan.textContent = FahrenheitSpan.textContent ;
    FahrenheitSpan.textContent = temp ;
     tempBOX2.placeholder = temp ;
     units.textContent = "℃" ;

    result = (temp2.value - 32)* 0.5555 ;
        output.textContent = result.toFixed(2) ;
})