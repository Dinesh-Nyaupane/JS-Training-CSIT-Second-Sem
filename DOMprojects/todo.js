let subbutton = document.getElementById("subbut");
let show = document.getElementById("display");


subbutton.addEventListener("click", (event) => {
  event.preventDefault();

  let input = document.getElementById("andar");
  let data = input.value.trim();
  
    
    
    if (data !== "") {
          let li = document.createElement("p");
          li.classList.add("list");
          li.style.padding = "10px";
    li.style.marginBottom = "5px";
    li.style.borderRadius = "20px";
    li.style.display = "flex";
    li.style.backgroundColor="white"
    li.style.alignItems = "center";
    li.style.gap = "10px";

    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "radio");
    checkbox.style.height = "20px";
    checkbox.style.width = "20px";

    
    let textSpan = document.createElement("span");
    textSpan.textContent = data;
    textSpan.style.fontSize = "large";

    let removeBtn = document.createElement("button");
    removeBtn.textContent = "REMOVE";
    removeBtn.style.fontSize="small"
    removeBtn.classList.add("delete");
    removeBtn.style.padding="10px"
    removeBtn.style.borderRadius="15px"
    removeBtn.style.border="none"
    removeBtn.style.marginLeft = "auto";

    removeBtn.addEventListener("click", () => {
      li.remove();
    });

    checkbox.addEventListener("click", () => {
      textSpan.style.textDecoration = "line-through";
      textSpan.style.color = "gray";
    });

    li.appendChild(checkbox);
    li.appendChild(textSpan);
    li.appendChild(removeBtn);
    show.appendChild(li);
    
    input.value = "";
}
});
