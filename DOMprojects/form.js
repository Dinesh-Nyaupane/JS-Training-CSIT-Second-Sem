const naam=document.getElementById("name");
const par_input=document.getElementById("nameko")
const par_email=document.getElementById("emailko")
const par_add=document.getElementById("addko")
const par_pass=document.getElementById("passko")
const email=document.getElementById("mail");
const add=document.getElementById("address");
const password=document.getElementById("pass")
const confirm_password=document.getElementById("conpass")
const submit_button=document.getElementById("sub")
const faram=document.getElementById("foorm");
faram.addEventListener("submit",(event)=>
{
    event.preventDefault();
    let name_data=naam.value.trim();
    if(name_data === "")
    {
        par_input.textContent="ERROR!"
        par_input.style.fontSize="10px"
        par_input.style.color="red"
        par_input.style.marginLeft="40px"
    }
    else 
    {
        par_input.textContent="";
    }


    let email_data=email.value.trim();
    if(email_data === "")
    {
        par_email.textContent="ERROR!"
        par_email.style.fontSize="10px"
        par_email.style.color="red"
        par_email.style.marginLeft="40px"
    }
    else if(!(email_data.includes("@")))
    {
        par_email.textContent="must include @"
        par_email.style.color="red"
    }
    else if(!(email_data.includes(".com")))
    {
        par_email.textContent="must include .com"
        par_email.style.color="red"
    }
    else
    {
        par_email.textContent="";
    }


    let add_data=add.value.trim();
    if(add_data === "")
    {   
        par_add.textContent="ERROR!"
        par_add.style.fontSize="10px"
        par_add.style.color="red"
        par_add.style.marginLeft="40px"
    }
    else
    {
        par_add.textContent="";
    }

    let pass1=password.value;
    let pass2=confirm_password.value;
    if(pass1 === "" || pass2 === "")
    {
        par_pass.textContent="ERROR!"
        par_pass.style.fontSize="10px"
        par_pass.style.color="red"
        par_pass.style.marginLeft="40px"
    }
    else if(pass1!=pass2)
    {
        par_pass.textContent="passwords dont match"
        par_pass.style.color="red"
    }
    else
    {
        par_pass.textContent=""
    }

})
