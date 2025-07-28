let image = document.getElementById("product");
let text = document.getElementById("description");
image.addEventListener("mouseover", function() {
    image.style.scale="2";
    image.style.transition="ease-in-out 0.9s";
    text.style.display = "block";
                text.style.transition="ease-in-out 0.9s";

});

image.addEventListener("dblclick", function() {
    image.style.scale="3";
    image.style.transition="ease-in-out 0.9s";
        text.style.background = "yellow";
            text.style.transition="ease-in-out 0.9s";


});

image.addEventListener("mouseout", function() {
    image.style.scale="1";
    image.style.transition="ease-in-out 0.9s";
        text.style.display = "none";
                    text.style.transition="ease-in-out 0.9s";


});