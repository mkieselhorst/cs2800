// function addNums(){
//     var num1 = document.getElementById("boxOne").value;
//     var num2 = document.getElementById("boxTwo").value;
//     num1 = parseFloat(num1);
//     num2 = parseFloat(num2);
    
//     if(isNaN(num1) || isNaN(num2) ){
//         alert('Not valid number(s)');
//     }
//     var sum = (num1 + num2);
//     document.getElementById('realResult').innerText = "Result: " + sum;
// }

// Add and subtract normally
// function calculate(option){
//     var num1 = document.getElementById("boxOne").value;
//     var num2 = document.getElementById("boxTwo").value;
//     num1 = parseFloat(num1);
//     num2 = parseFloat(num2);
//     if(isNaN(num1) || isNaN(num2) ){
//         alert('Not valid number(s)');
//     }
//     var result;
//     if(option === 'add'){
//         result = (num1 + num2);
//     }else if(option === 'subtract'){
//         result = (num1 - num2);
//     }
//     document.getElementById('realResult').innerText = "Result: " + result;
// }

// function for EventListener
function addNumbers(){
    var num1 = parseFloat(document.getElementById("boxOne").value);
    var num2 = parseFloat(document.getElementById("boxTwo").value);
    var result = num1 + num2;
    document.getElementById('realResult').innerText = "Result: " + result;
}
function subNumbers(){
    var num1 = parseFloat(document.getElementById("boxOne").value);
    var num2 = parseFloat(document.getElementById("boxTwo").value);
    var result = num1 - num2;
    document.getElementById('realResult').innerText = "Result: " + result;
}
// adding Eventlistener
document.getElementById("addButton").addEventListener('click', addNumbers);
document.getElementById("subButton").addEventListener('click', subNumbers);
