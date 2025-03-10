
function bmiCalculator (weight, height) {
    var bmi = weight/(height*height);
    bmi = Math.floor(bmi);
    var interpretation;
    if(bmi < 18.5){
        interpretation = "Your BMI is "+bmi+", so you are underweight.";
    }   
