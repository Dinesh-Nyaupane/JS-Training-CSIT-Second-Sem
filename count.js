function countEvenBetween(start, end) {
    let count = 0;
    let current = start + 1;

    while (current < end) {
        if (current % 2 === 0) {
            count = count + 1;
        }
        current = current + 1;
    }

    return count;
}

// Test the function
let result = countEvenBetween(3, 10);
console.log("Count of even numbers between 3 and 10:", result);
