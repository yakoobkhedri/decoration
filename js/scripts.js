new SmoothScroll('a[href*="#"]', {
    easing: 'linear',
    speed: 1000
});

new WOW().init();

$('#toggler').on('click', function () {
    var nav = $('#nav');
    var dark = $('#dark');
    var toggler = $('#toggler i');
    if (nav.css('right') === '0px') {
        nav.css('right', '-381px');
        dark.css('display', 'none');
    } else {
        nav.css('right', '0');
        dark.css('display', 'block');
    }
});
$('.fa-close,#dark').on('click', function () {
    var nav = $('#nav');
    var dark = $('#dark');
    nav.css('right', '-381px');
    dark.css('display', 'none');
});

$(window).on('scroll load', function () {
    if ($(window).scrollTop() > 570) {
        $('#navbar').css('background-color', '#19b81924');
    } else {
        $('#navbar').css('background-color', 'rgba(0 , 0 , 0 , 0)');
    }
});

