$('.slider-1 > .owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:6000,
    margin:0,
    nav:true,
    navText:['<img src="http://www.inavi.com/Content2/Images/main/icon-prev.png">', '<img src="http://www.inavi.com/Content2/Images/main/icon-next.png">'],
    responsive:{
        0:{
            items:1
        }
    }
})

var $firstDot = $('.slider-1 > .owl-carousel > .owl-dots > .owl-dot.active');

$firstDot.removeClass('active');

setTimeout(function() {
    $firstDot.addClass('active');
}, 30);