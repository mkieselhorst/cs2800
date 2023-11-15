function fahrenheitToCelsius(degreeFahrenheit){
return((degreeFahrenheit - 32) * (5/9));
}
function celsiusToFahrenheit(degreeCelsius){
    return((degreeCelsius * (9/5)) + 32);
}
document.getElementById("cVal").onchange = function(){
    let cDegree = document.getElementById("cVal").value;
    document.getElementById("fVal").value = celsiusToFahrenheit(cDegree);
}
document.getElementById("fVal").onchange = function(){
    let fDegree = document.getElementById("fVal").value;
    document.getElementById("cVal").value = fahrenheitToCelsius(fDegree);
}