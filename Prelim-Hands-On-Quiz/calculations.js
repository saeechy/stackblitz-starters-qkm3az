function addition(a, b){
    return a+b;
}
function subtraction(a, b){
    return a-b;
}
function multiplication(a, b){
    return a*b;
}
function division(a, b){
    return a / b;
}
// using module export on instruction number 2
module.exports= {
    addition,
    subtraction,
    multiplication,
    division
};