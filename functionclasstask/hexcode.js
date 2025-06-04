function hexCodeGenerator() {
  let hex_code = Math.floor(Math.random() * 10000000 + 1000000).toString(16);
  let valid_hex_code = "#" + hex_code;
  return valid_hex_code;
}
console.log(hexCodeGenerator());
