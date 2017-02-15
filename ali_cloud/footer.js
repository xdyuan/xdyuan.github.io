/**
 * Created by six on 16/12/8.
 */
var text = document.getElementById('input-text');
var no = document.getElementById('input-fother');
var up = document.getElementById('input-text-up');
var down = document.getElementById('input-text-down');
// var fother = document.getElementById('footer-small');
text.onmouseover =function () {
    no.style.display= 'block';
    up.style.display='block';
    down.style.display= 'none';
};
no.onmouseout=function () {
    no.style.display= 'none';
    up.style.display='none';
    down.style.display= 'block';
};

// 现在做二维码的动画
    var ul = document.getElementById('head-li-ul');
    var li1 =ul.childNodes[0];
    var img_yun= ul.children[1];
    var img_wx = ul.children[3];
    var img_wb = ul.children[5];
    var img_fl = ul.children[7];
    var a1 =document.getElementById('li-ul-a1');
    var aa =document.getElementById('li-ul-a');
    var a2 =document.getElementById('li-ul-a2');
    var a3 =document.getElementById('li-ul-a3');

    a1.onmouseover=function () {
        img_wx.style.display='block';
        img_yun.style.display='none';
        img_wb.style.display='none';
        img_fl.style.display='none';
    };
    aa.onmouseover=function () {
        img_wx.style.display='none';
        img_yun.style.display='block';
        img_wb.style.display='none';
        img_fl.style.display='none';
    };
    a2.onmouseover=function () {
        img_wx.style.display='none';
        img_yun.style.display='none';
        img_wb.style.display='block';
        img_fl.style.display='none';
    };
    a3.onmouseover=function () {
        img_wx.style.display='none';
        img_yun.style.display='none';
        img_wb.style.display='none';
        img_fl.style.display='block';
    };
    


