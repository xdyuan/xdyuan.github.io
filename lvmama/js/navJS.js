$(function () {
    $('.Ren_nav_ul_li').on('mouseenter',function () {
        $(this).addClass('Ren_nav_ul_li_color') .siblings(this).removeClass('Ren_nav_ul_li_color');
    });
    $('.Ren_nav_ul_li').on('mouseleave',function () {
        $(this).removeClass('Ren_nav_ul_li_color');
    });
    $('.Ren_nav_ul_li_s').each(function (index,ele) {
        $(ele).on('mouseenter',function () {
            console.log(index);
//                    console.log($(this).children().eq(1) == $(this).children('span'));
            $(this).children('span').css({
                'background-position':'-129px -310px'
            });
            $(this).children('div').show();
            $(this).children('div').children('ul').show();
        });
        $(ele).on('mouseleave',function () {
            $(this).children('span').css({
                'background-position':'-129px -300px'
            });
            $(this).children('div').hide();
            $(this).children('div').children('ul').hide();
        })
    })
})