function addNums(){
    var num1 = document.getElementById("boxOne").value;
    var num2 = document.getElementById("boxTwo").value;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    if(isNaN(num1) || isNaN(num2) ){
        alert('Not valid number(s)');
    }
    var sum = (num1 + num2);
    document.getElementById('realResult').innerText = "Result: " + sum;
}
