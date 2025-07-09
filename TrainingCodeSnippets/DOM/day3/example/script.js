let input = prompt("Kindly enter your name...")

let main = document.querySelector(".main")

let newDiv = document.createElement("h1");

newDiv.style.padding = "20px"
newDiv.style.fontStyle = "Italic"
newDiv.style.borderRadius = "20px"

switch (input.toLowerCase()) {
    case "dinesh": newDiv.innerText = `Welcome!, ${input.toUpperCase()}`;
        newDiv.style.background = "navy"
        newDiv.style.color = "white"
        break;

    case "rajiv": newDiv.innerText = `Welcome!, ${input.toUpperCase()}`;
        newDiv.style.background = "red"
        newDiv.style.color = "white"
        break;

    case "rohit": newDiv.innerText = `Welcome!, ${input.toUpperCase()}`;
        newDiv.style.background = "green"
        newDiv.style.color = "white"
        break;

    case "samyog": newDiv.innerText = `Welcome!, ${input.toUpperCase()}`;
        newDiv.style.background = "black"
        newDiv.style.color = "white"
        break;

    default: newDiv.innerText = `Welcome!, Guests`;
        newDiv.style.background = "gray"
        newDiv.style.color = "white"
        break;
}

main.appendChild(newDiv);