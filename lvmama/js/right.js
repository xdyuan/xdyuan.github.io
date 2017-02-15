/**
 * Created by hhk on 16/12/7.
 */
var App = $('#Ap');
var AppCode = $('.AppCode');
App.mousemove(function () {
    AppCode.css('display','block');
});
App.mouseout(function () {
    AppCode.css('display','none')
});
var regsiter = $('.regsiter');
var img = $('.siter');
regsiter.mousemove(function () {
    img.css('display','block');
});
regsiter.mouseout(function () {
    img.css('display','none');
});
var fox = $('.bm-fox');
var box = $('.bm-box');
var rightsidebar = $('.rightsidebar');
fox.click(function () {
    rightsidebar.animate({right:-36});
    box.animate({right:35},1500)
});
box.click(function () {
    rightsidebar.animate({right:0},1500);
    box.animate({right:-60});
});
fox.click();
setInterval(function () {
    if(document.documentElement.clientHeight <=450){
        rightsidebar.css('height','450px')
    }else{
        rightsidebar.css('height','100%')
    }
},1);