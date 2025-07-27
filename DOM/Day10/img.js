const image = document.getElementById("image");
const img1 = document.getElementById("img1");
const image1 = document.getElementById("image1");
const p = document.getElementById("p");
Object.assign(image.style, {
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
});
img1.style.overflow="hidden";
img1.style.width+ "300px";
img1.style.height= "200px"
p.style.display = "none";
img1.addEventListener("mouseover", () => {
  image1.style.scale= "1.2";
  image1.style.transition = "0.8s ease-in-out";
  p.style.display = "flex";
  p.style.backgroundColor = "yellow";
});
img1.addEventListener("mouseout", () => {
  image1.style.scale = "1";
  p.style.display = "none";
});
