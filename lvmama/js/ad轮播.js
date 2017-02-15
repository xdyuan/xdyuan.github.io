/**
 * Created by admin on 16/12/5.
 */

$(function () {
    var index = 0;
    var timer = null;
    function autoPlay() {
        index++;
        index = index > 7 ? 0 : index;
        $('#adUl li').eq(index).fadeIn('slow').siblings('#adUl li').fadeOut('slow');
        $('#adOl li').eq(index).addClass('show').siblings('#adOl li').removeClass('show');
    }
    timer = setInterval(autoPlay,5000);
    $('#ad').mouseenter(function () {
       clearInterval(timer);
    });
    $('#ad').mouseleave(function () {
        clearInterval(timer);

        timer = setInterval(autoPlay,5000)
    });
    $('#adTxtUl').on('mouseenter',function () {
        clearInterval(timer);
        timer = setInterval(autoPlay,5000)
    });
    $('#adTxtUl').on('mouseleave',function () {
        clearInterval(timer);
    });
    $('#adOl li').mouseenter(function () {
        $('#adOl li').eq($(this).index()).addClass('show').siblings('#adOl li').removeClass('show');
        $('#adUl li').eq($(this).index()).fadeIn('slow').siblings('#adUl li').fadeOut('slow');
        index = $(this).index();
    });
    $('#adContentUl>li').on('click',function () {
        $(this).css({
            'background-color':'white',
            'border-left':'2px solid red',
            'color':'black'
        }).siblings($(this)).css({
            'background-color':'rgba(111,144,148,0.5)',
            'border-left':'none',
            'color':'white'
        });
        $('#adTxtUl>li').eq($(this).index()).css({
            'z-index':'1',
            'display':'block'
        }).siblings('#adTxtUl>li').css('display','none')
    })



});