$('.click').click(function(){
    $('#left-side-bar').addClass('active');
    $('#left-side-bar-bg').css('display','block');
});

$('#left-side-bar-bg').click(function(){
    $('#left-side-bar').removeClass('active');
    $('#left-side-bar-bg').css('display','none');
})

