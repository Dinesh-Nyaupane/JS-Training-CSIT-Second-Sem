function calculateBMI(weight, height) {
    weight = Number(weight)
    height = Number(height)

    if (!isFinite(weight) || !isFinite(height) || height <= 0)
 {
        return false
    }

    let bmi = (weight / (height * height)).toFixed(2);
    return bmi
}

console.log(calculateBMI(60,1.75));
console.log(calculateBMI("abc",2.5));
