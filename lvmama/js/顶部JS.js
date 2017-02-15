/**
 * Created by admin on 16/12/5.
 */
var ul_left = document.getElementById('ul_left');
var change = document.getElementById('change');
var changeBox = document.getElementById('changeBox');
var lis = ul_left.children;
change.addEventListener('click',function (e) {
    e = e || window.event;
    e.stopPropagation();
    if(changeBox.style.display == 'none'){
        lis[0].style.backgroundColor = 'white';
        lis[0].style.borderLeft = '1px solid #ccc';
        lis[0].style.borderRight = '1px solid #ccc';
        lis[0].children[0].style.background = 'url("images/header_icon.png") no-repeat -19px -69px';
        changeBox.style.display = 'block';
    } else {
        lis[0].style.backgroundColor = 'rgb(250,250,250)';
        lis[0].style.borderLeft = 'none';
        lis[0].style.borderRight = 'none';
        lis[0].children[0].style.background = 'url("images/header_icon.png") no-repeat 0px -69px';
        changeBox.style.display = 'none';
    }
});
changeBox.addEventListener('click',function (e) {
    e = e ||window.event;
    e.stopPropagation();
});
document.addEventListener('click',function () {
    lis[0].style.backgroundColor = 'rgb(250,250,250)';
    lis[0].style.borderLeft = 'none';
    lis[0].style.borderRight = 'none';
    lis[0].children[0].style.background = 'url("images/header_icon.png") no-repeat 0px -69px';
    changeBox.style.display = 'none';
});




$(function () {
    $('#urlwechat').on('mouseenter',function () {
        $('#wechatBox').show();
        $('#ul_right_wechat').css('background','url("images/header_icon.png") no-repeat -20px -90px');
    });
    $('#urlwechat').on('mouseleave',function () {
        $('#wechatBox').hide();
        $('#ul_right_wechat').css('background','url("images/header_icon.png") no-repeat 0 -90px');
    });
    $('#urlweibo').on('mouseenter',function () {
        $('#ul_right_weibo').css('background','url("images/header_icon.png") no-repeat -20px -110px');
    });
    $('#urlweibo').on('mouseleave',function () {
        $('#ul_right_weibo').css('background','url("images/header_icon.png") no-repeat 0 -110px');
    });

    $('#urlmyTel').mouseenter(function () {
        $('#myTelBox').show();
    });
    $('#urlmyTel').mouseleave(function () {
        $('#myTelBox').hide();
    });

    $('#url1').mouseenter(function () {
        $('#list').show();
        $('#url1').addClass('list');
    });
    $('#list').mouseleave(function () {
        $('#list').hide();
        $('#url1').removeClass('list');
    });

});


