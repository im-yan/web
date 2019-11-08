$('section>div').click(function(){
    var $this = $(this);

    if ($this.hasClass('active')){

    }
    else {
        $this.addClass('active');
        $this.siblings('.active').removeClass('active');
    }
});