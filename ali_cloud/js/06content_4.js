/**
 * Created by mac on 16/12/8.
 */
//给图标进行动画
$(function () {
   // var box = $('#content_4_box_bot').children().eq(0).children();
    var img = $('.content_4_con_pic').children();
    img.each(function (index,e) {
        var step = 75;
        var target = 0;
        var timer = null;
//动画实现
        $(e).hover(function () {
            clearInterval(timer);
            timer = setInterval(function () {
                target = target-step;
                target < -4425 ? target = -4425:target;
                img.eq(index).css({top: target+'px'});
            },10);
        },function () {
            clearInterval(timer);
            timer = setInterval(function () {
                target = target+step;
                target > 0 ? target = 0:target;
                img.eq(index).css({top: target+'px'});
            },10);
        });

    });
});