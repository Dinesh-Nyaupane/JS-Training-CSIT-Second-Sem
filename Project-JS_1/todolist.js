let task = document.getElementById("Taskbox");
let submitbtn = document.getElementById("submit");
let outputBox = document.getElementById("output");
submitbtn.addEventListener("click", function(events){
    events.preventDefault();
    //creating li and selecting ul
    let tasklist =document.getElementById("tasklist");
    let list = document.createElement("li");
    
    // setting id to list "li"
    list.setAttribute("id", "jsTasklist");

    // creating input box of type checkbox
    let inputboxFORCHECKBOX = document.createElement("input");
    inputboxFORCHECKBOX.setAttribute("type", "checkbox");
    inputboxFORCHECKBOX.setAttribute("id", "tickbox");

    
//. creating span for checkbox 
let spanCheckbox = document.createElement("span");
// adding checkbox to li first
spanCheckbox.appendChild(inputboxFORCHECKBOX);

//adding span of checkbox inside li
list.appendChild(spanCheckbox);

//. creating span for task and adding value inside it 
let spanTask = document.createElement("span");
spanTask.textContent = task.value;

// adding task given  to li second
 list.appendChild(spanTask);

//adding span of task inside li
list.appendChild(spanTask)

// logic for text decoration while ticking checkbox
inputboxFORCHECKBOX.addEventListener("click", ()=>
{
    if(inputboxFORCHECKBOX.checked)
    {
        list.style.textDecoration = "line-through"
    }else{
        list.style.textDecoration = "none";
    }
})

//creating delete button and adding it inside list "li"
let delbtn = document.createElement("button");
 delbtn.setAttribute("id", "deleteButton");
 delbtn.innerText = "X" ;
 //addind delete btn inside li
 list.appendChild(delbtn);

   tasklist.append(list);
   tasklist.append(list);

   delbtn.addEventListener("click", ()=>{
       list.remove();
   })
})