function isPerfectSquare(n) {
    if (n < 0) return false;

    let i = 0;
    while (i * i <= n) {
        if (i * i === n) {
            return true;
        }
        i = i + 1;
    }
    return false;
}

// Test
console.log(isPerfectSquare(16));  // true
console.log(isPerfectSquare(20));  // false
