$(function(){
    var $line = $('.line');
    var $list = $('.nav-list li');
    var curWidth = 0;  //当前li宽度
    var curLeft = 0;  //当前li位置
    $list.each(function(index, ele){
        $(ele).mouseenter(function(){
            curWidth = $(ele).width();
            curLeft = $(ele).position().left;
            $line.stop().animate({
                width: curWidth,
                left: curLeft
            }, 0)
        });
        $(ele).mouseleave(function(){
            $line.stop().animate({width: 0}, 0);
        })
    })
});

