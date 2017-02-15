$(function() {

    var index = 0;
    $('.price_img_box > ul  > li').on('mouseenter', function () {
        index = $(this).index();

        $(this).addClass('ctrl1').siblings('li').removeClass('ctr1');
        $('.price_img_box > li').eq(index).fadeIn('fast').siblings('li').fadeOut('normal');
    }).triggerHandler('mouseenter');

    $('.btn_prev').on('click', function (e) {
        e = e || window.event;
        e.preventDefault();

        index--;
        index < 0 ? index = 4 : index;
        move(index);

    });

    $('.btn_next').on('click', function (e) {
        e = e || window.event;
        e.preventDefault();
        index++;
        index < 4 ? index = 0 : index;
        move(index);
    });

    function move(index) {
        $('.price_img_box > ul > li').eq(index).addClass('ctr1').siblings('li').removeClass('ctr1');
        $('.price_img_box >  > li').eq(index).fadeIn('fast').siblings('li').fadeOut('normal');
    }

});

