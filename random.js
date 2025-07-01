// Generate a random 6-digit coupon code number without leading zeros.
function random() {
    let code;
    do {
        code = Math.floor(100000 + Math.random() * 900000);
    } while (code.toString()[0] === '0');
    return code;
}
console.log(`Coupon code generated: ${random()}`);