
/**
 * Created by mac on 16/12/7.
 */
var nav_li=document.querySelectorAll(".special-navigetion-box>ul>li");
console.log(nav_li.length);

$(function () {
    //使用jquery添加温泉滑雪中的图片
    $('.img-prev > li > a[class=images-01]').each(function (index11,content) {
        console.log(index11)
        $(this).attr({
            'title':'想旅游就来驴妈妈???',
            'target':'_blank',
        })   //创建的属性
        var imgprev=$('<img>');
        // var spanprev=$('<span>');
        imgprev.attr({
            'src': 'images/'+(index11+1)+'.jpg'
        });
        // spanprev.attr('4.4 折');
        // spanprev.addClass('discount ');
            $(this).prepend(imgprev);
    })

    //导航栏下划线自动切换效果 和内容的切换
    $('.special-navigetion-box>ul>li').on('click',function () {
        var index=$(this).index()
        console.log(index)
        $(this).addClass('ltem  family-color').siblings().removeClass('ltem  family-color');

        $('.content-right>ul').stop().eq(index).fadeIn('fast').siblings().fadeOut('fast')
    }).triggerHandler('click')

   // 图片内容的动画
    $('.content-right>ul>li').on('mouseover',function () {
        $(this).stop(true).animate({marginTop:'-5PX',},'slow').siblings().animate({marginTop:'0px'})
    })
    $('.content-right>ul>li').on('mouseout',function () {
        $(this).stop(true).animate({
            marginTop:'0PX',},'fast')

    })
})