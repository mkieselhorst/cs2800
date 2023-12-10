
$( document ).ready(function() {
    // get current year
    var date = new Date().getFullYear();
    document.getElementById("year").innerHTML = date;
    // get container
    var imageContainer = document.getElementById('imgContainer');
    // add click listener
    imageContainer.addEventListener('click', function(){
    // call function
        changeImage();
    });
    // func to change image
    function changeImage(){
    // gets the imageContainer's child and appends it to the id
        $("#imgContainer img:first-child").appendTo("#imgContainer")
    }
    // prevent the default submit function from handling
    // Instead calls new alert function
    $('#myForm').submit(function(Event){
        Event.preventDefault();
        alertFunc();
    });
    // get all variables from input
    var name = document.getElementById("nameBox").value;
    var phone = document.getElementById("phoneBox").value;
    var email = document.getElementById("emailBox").value;
    var interest =document.getElementById("interestBox").value;
    // function for alert
    function alertFunc(){
        confirm("Do you want to submit this information? " + "\n"+ "\n"+ "name: " + name + "\n"+ "Phone: " + phone + "\n"+ "Email: " + email + "\n"+ "Interest: " + interest);
    }

});