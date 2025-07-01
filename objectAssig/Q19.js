function generateHexColor() {
  const color = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  return "Generated color code: #" + color;
}

console.log(generateHexColor());