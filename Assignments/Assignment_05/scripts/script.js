// set default text to "results"
document.getElementById("resultBox").innerText = "Results";

// Function for geting element, converting to float, converting to kilograms, and then outputing it to the resultBox
function poundsToKilograms(){
    let pounds = parseFloat(document.getElementById("poundsInput").value);
    let convertedWeight = pounds * 0.4536;
    document.getElementById('resultBox').innerText = convertedWeight + "KG";
}

// Function for geting element, converting to float, converting to pounds, and then outputing it to the resultBox
function kilogramstoPounds(){
    let kilograms = parseFloat(document.getElementById("kiloInput").value);
    let convertedWeight = kilograms * 2.2;
    document.getElementById('resultBox').innerText =convertedWeight + "LB";
}
// adding eventlistener of type click to the pToK button, and having it call poundsToKilograms()
document.getElementById('pToK').addEventListener('click', poundsToKilograms);

// adding eventlistener of type click to the kToP button, and having it call kilogramsToPounds()
document.getElementById('kToP').addEventListener('click', kilogramstoPounds);