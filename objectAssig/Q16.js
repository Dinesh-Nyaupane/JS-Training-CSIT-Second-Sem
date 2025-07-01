function generatePasswordLength() {
  const length = Math.floor(8 + Math.random() * 9);
  return "Generated password length is " + length;
}

console.log(generatePasswordLength());