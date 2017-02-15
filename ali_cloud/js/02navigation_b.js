/**
 * Created by mac on 16/12/5.
 */
//下班部分的动作
$(
    function () {




        $('.navigation_b_banner ul li').each(
            function (index,element) {
                //鼠标放入时以及拿走时所做的动作
                     var timer = null;
                     var step = -150;
                     var target = 0;
                     var li = $(element).children();
                     var img = li.eq(2);
                     var h1 = li.eq(0);
                    $(element).hover(function () {
                        clearInterval(timer);
                        timer = setInterval(function () {
                           img.css({ top: (target)+'px'});
                            target += step;
                            target < -8850? target = -8850 : target;
                        },10);
                        //鼠标进入框内时，让字体变色
                        h1.css({color:'#00AEFF'}).siblings().css({color:'black'});
                        //鼠标出去时的动作
                    },function () {
                        clearInterval(timer);
                        timer = setInterval(function () {
                            img.css({ top: (target)+'px'});
                            target -=step;
                            target> 0? target = 0 : target;
                        },10);
                        h1.css({color:'black'});
                    });
            }
        );

    }
);