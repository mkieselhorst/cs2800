// alert("linked");
//Keyword name (args) {function}
var num1 = 10, num2 = 20;
sayHello();
calculate(num1, num2);
var total = returnSomething(5, 6);
function sayHello() {
    document.write("My First JS function");

}
function calculate(num1, num2){
    document.write("<p>num1 + num2 = " + (num1+num2)+ "</p>");
}
function returnSomething(num1, num2){
    return(num1 * num2);
    
}
document.write( "<p>num1 * num2 = " + total + "</p>");