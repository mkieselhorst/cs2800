$(document).ready(function(){
    // add your logic here

    // prevent default submission method----- spcific to jquery
    $('#myForm').submit(function(Event){
        Event.preventDefault();
        alert('form is submitted');
    });
    // display current year
    
    var currentYear = new Date().getFullYear();
    $('#currentYear').text(currentYear);
})