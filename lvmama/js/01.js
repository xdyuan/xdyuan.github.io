/**
 * Created by apple on 16/12/9.
 */


var li_nav = document.querySelectorAll(".pro-list-fl>ul>li");
 console.log(li_nav.length)

$(function () {


$('.pro-list-fl>ul>li').on('mouseover',function () {
 $(this).stop(true).animate({marginTop:'-5px',},'slow').siblings().animate({marginTop:'0px'})

})
$('.pro-list-fl>ul>li').on('mouseout',function () {
 $(this).stop(true).animate({marginTop:'0px'},'fast')


})
})