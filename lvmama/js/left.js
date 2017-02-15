/**
 * Created by hhk on 16/12/8.
 */
$(function () {
    $('#sider li').click(function () {
        $(this).addClass('cart').siblings().removeClass('cart');
    });

    $(window).scroll(function () {
        // console.log($(window).scrollTop());
        $(window).scrollTop() <= 614 ? $('.leftsidebar').css('display','none'):$('.leftsidebar').css('display','block');
        if( $(window).scrollTop() > 614 && $(window).scrollTop() < 940){
            $('#sider li').eq(0).addClass('cart').siblings().removeClass('cart');
        }else if( $(window).scrollTop() > 1040 && $(window).scrollTop()<1600) {
            $('#sider li').eq(2).addClass('cart').siblings().removeClass('cart');
            }else if( $(window).scrollTop() > 1500 && $(window).scrollTop()<2000){
                $('#sider li').eq(6).addClass('cart').siblings().removeClass('cart');
        }
    })
});
