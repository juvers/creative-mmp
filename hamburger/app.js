$(function() {
    var $hamburgers = $('.hamburger');

    $hamburgers.on('click', function(event) {
        event.preventDefault();
        $(this).toggleClass('hamburger-active');
    });
});