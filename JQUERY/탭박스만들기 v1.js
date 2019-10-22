$('.tab-box > .head > ul > li').click(function() {
    var $clickedTab = $(this);
    var $activeTab = $clickedTab.siblings('.active');
    var thisIndex = $(this).index();

    $activeTab.removeClass('active');
    $clickedTab.addClass('active');

    $('.tab-box>.body>ul>.active').removeClass('active');
    $('.tab-box>.body>ul>li').eq(thisIndex).addClass('active');
});