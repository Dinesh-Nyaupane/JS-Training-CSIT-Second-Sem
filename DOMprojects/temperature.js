const cel=document.getElementById("celsius")
const faren=document.getElementById("farenheit")
cel.addEventListener("keydown",(event)=>{
    if(event.key==="Enter")
    {
        let C=cel.value;
        let F=(Number(C)*(9/5))+32;
        faren.value=F.toFixed(2);
    }
})
faren.addEventListener("keydown",(event)=>{
    if(event.key==="Enter")
    {
        let F=faren.value;
        let C=(Number(F)-32)*(5/9);
        cel.value=C.toFixed(2);
    }
})