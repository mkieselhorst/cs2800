// alert("linked");
//Keyword name (args) {function}


// Definitions
var num1 = 10, num2 = 20;
var total = returnSomething(5, 70);


// Calls
sayHello();
calculate(num1, num2);
    document.write( "<p>total = " + total + "</p>");


// Functions
function sayHello() {
    document.write("My First JS function");

}
function calculate(num1, num2){
    document.write("<p>num1 + num2 = " + (num1+num2)+ "</p>");
    
}
function returnSomething(num1, num2){
    return(num1 * num2);
    
}


// arrays
let list = new Array("David", "Miller", "Patty", 1, 102);

let cars = Array("Car 1", );

let myList = Array();

// list[2];

document.write("<br />")

for (let i = 0; i < list.length; i++){
    document.write( list[i] + " ");
}

let person = {
    fName: "Max",
    lName: "Kieselhorst",
    email: "kieselhorst.3@wright.edu",
    phone: "937-867-5309",
    fullName(){
        return (fName + " " + lName);
    }
}
document.write("<br />")
document.write(fullName())

