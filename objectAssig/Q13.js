let amount1 = 1000;
let amount2 = "abc";
let amount3 = 1200.5;

let valid1 = parseFloat(amount1);
let valid2 = parseFloat(amount2);
let valid3 = parseFloat(amount3);

let hasValid = false;

// Initialize an empty string to hold the Math.max() arguments
let result;

if (!isNaN(valid1) && isFinite(valid1)) {
  result = valid1;
  hasValid = true;
}

if (!isNaN(valid2) && isFinite(valid2)) {
  if (hasValid) {
    result = Math.max(result, valid2);
  } else {
    result = valid2;
    hasValid = true;
  }
}

if (!isNaN(valid3) && isFinite(valid3)) {
  if (hasValid) {
    result = Math.max(result, valid3);
  } else {
    result = valid3;
    hasValid = true;
  }
}

if (hasValid) {
  console.log("Maximum valid transaction amount is " + result);
} else {
  console.log(false);
}
