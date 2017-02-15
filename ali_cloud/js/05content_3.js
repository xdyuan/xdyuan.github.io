/**
 * Created by mac on 16/12/7.
 */
//给每个块加一个背景
$(function () {
    $('.content_3_box>ul>li').each(function (index,e) {
       $(e).css({background:'url(05images/content_5_pic'+(index+1)+'.jpg)'});
       $(e).css({backgroundSize:'100%'});
    });
    //左右点击的轮播

    var prev = $('#prev'),next = $('#next');
    var box = $('#content_3_box');
    var ul = box.children().eq(2);
    var leader = -1280 ,target = -1280;
    var step = 256;
    box.hover(function () {
        prev.css({display:'block'});
        next.css({display:'block'});
        },function () {
        prev.css({display:'none'});
        next.css({display:'none'});
        }
    );
    //下一个按钮的触发事件
    next.on('click',function () {
        target  = target - step;
        if(target < -3840){
            target = -1536;
            leader = -1280;
        }
    });
    //上一个按钮的触发事件
    prev.on('click',function () {
        target  = target + step;
        if(target > 0){
            target = -2304;
            leader = -2560;
        }
    });
    //定时器
    setInterval(move,10);
    function move() {
        leader = leader + (target -leader)/10;
        Math.abs(leader-target) < 1 ? leader = target :leader;
        ul.css({left:leader});
    }
});