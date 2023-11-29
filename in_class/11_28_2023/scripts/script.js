$(document).ready(function(){
// hide all answers using jquery
    $('dd').hide();

    // Accordion affect using jquery ui
    $('dt').on('click', function(){
        $(this).next('dd').slideToggle();
        // $('dd').not($(this).next('dd'));
    })

});