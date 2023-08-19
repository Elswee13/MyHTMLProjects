function* bmiCalculator(weight, height) {
    var bmi = (weight / Math.pow(height, 2));
    var result = "";
    if (bmi < 18.5) {
        result = " you are underweight";
    }
    if (bmi >= 18.5 || bmi <= 24.9) {
        result = " so you have a normal weight";
    }
    if (bmi > 24.9) {
        result = " so you are overweight";
    }
    return bmi;
}


//*var bmi = bmiCalculator(65, 1.8);*//

console.log(bmi);