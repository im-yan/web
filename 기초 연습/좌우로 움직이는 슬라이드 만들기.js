
$('.slider > .btns > button').click(function() {
    var index = $(this).index();

    var $슬라이더 = $(this).closest('.slider');

    var $현재 = $슬라이더.find(' > .slides > div.active');

    var $이후 = null;

    if ( index == 0 ) {
        $이후 = $현재.prev();
    }
    else {
        $이후 = $현재.next();
    }

    if ( $이후.length == 0 ) {
        if ( index == 0 ) {
            $이후 = $슬라이더.find(' > .slides > div:last-child');
        }
        else {
            $이후 = $슬라이더.find(' > .slides > div:first-child');
        }
    }

    $현재.removeClass('active');
    $이후.addClass('active');
});