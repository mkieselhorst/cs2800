$(document).ready(function(){
// hide all answers using jquery
    $('dd').hide();
    
    // Accordion affect using jquery ui
    $('dt').on('click', function(){
        $(this).next('dd').slideToggle();
        
    })

    function slideImages(){
        $("#image-container img:first-child").appendTo("#image-container").hide().show("slide", {direction: "right"}, 1000);
    }
    setInterval(slideImages, 1000);
    
});