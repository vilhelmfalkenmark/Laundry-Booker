$(document).ready(function () {
    $('.weekdays-container').on('click', '.weekday-expand', function() {
        $('.booking-container').slideUp(500);
        if ($(this).hasClass('expanded')) {
        $('.weekday-expand').removeClass('expanded');
        $(this).parent().find('.booking-container').slideUp(500); 
        $(this).removeClass('expanded');  
        } 
        else {
        $('.weekday-expand').removeClass('expanded');
        $(this).parent().find('.booking-container').slideDown(500);    
        $(this).addClass('expanded'); 
        }
    });
    $('.button-bookings').click(function() {
    $('.my-bookings').slideToggle(500);    
    });
    $('.close-bookings').click(function() {
    $('.my-bookings').slideUp(500);    
    });
});