$(function(){
    $('.content_2').css({
        position: 'relative'
    });
    $('.content_2_box').children('div').eq(0).css({
        position: 'absolute',
        opacity: 0,
        top: '90px'
    });
    $('.content_4').css({
        position: 'relative'
    }).children('.content_4_box').children('div').eq(0).css({
        position: 'absolute',
        opacity: 0,
        top: '50px'
    });


    $(window).scroll(function(){
        var sTop = $(document).scrollTop();
        if($('.content_2').offset().top - sTop < 400) {
            $('.content_2_box').children('div').eq(0).animate({
                opacity: 1,
                top: '50px'
            }, 1200)
        }
        if($('.content_4').offset().top - sTop < 400){
            $('.content_4_box').children('div').eq(0).animate({
                opacity: 1,
                top: '90px'
            }, 1200)
        }

    })






})
