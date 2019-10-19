$('.my-box>.owl-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    loop:true,
    margin:0,
    nav:true,
    navText:['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        }
    }
});