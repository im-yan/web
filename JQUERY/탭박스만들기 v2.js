$('.tab-box>.head>ul>li').click(function(){
    var $clickedTab = $(this);
    var index = $clickedTab.index();

    $clickedTab.siblings('.active').removeClass('active');
    $clickedTab.addClass('active');

    var bodyTab = $clickedTab.closest('.tab-box').find('>.body>ul>li').eq(index);
    $clickedTab.closest('.tab-box').find('>.body>ul>.active').removeClass('active');
    bodyTab.addClass('active');

});