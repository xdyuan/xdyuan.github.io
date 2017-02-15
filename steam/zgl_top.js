/**
 * Created by imac on 16/12/5.
 */
var list = document.getElementsByClassName('top_ul')[0];
var listCh= list.children;
listCh[0].onmouseover = function () {
    this.children[1].style.display = 'block'
};
listCh[0].onmouseout = function () {
    this.children[1].style.display = 'none'
};
listCh[1].onmouseover = function () {
    this.children[1].style.display = 'block'
};
listCh[1].onmouseout = function () {
    this.children[1].style.display = 'none'
};



var navUl = document.getElementsByClassName('the_center_of_content_right_nav_ul')[0];
// console.log(navUl);
$(navUl).css({
    backgroundColor:'rgb(53,73,89)'
});
var navUlCh = navUl.children[0];
// console.log(navUlCh.children[0]);
var navUlChCh = navUlCh.children;
// console.log(navUlChCh[0]);
var aItemNav = document.getElementsByClassName('a_item_nav');
// console.log(aItemNav);

navUlChCh[0].onmouseover = function () {this.children[1].style.display = 'block';$(aItemNav[0]) .css({backgroundColor: '#c6d4df'})};
navUlChCh[0].onmouseout = function () {this.children[1].style.display = 'none';$(aItemNav[0]) .css({backgroundColor: 'rgb(39,91,132)'})};
navUlChCh[1].onmouseover = function () {this.children[1].style.display = 'block';$(aItemNav[3]) .css({backgroundColor: '#c6d4df'})};
navUlChCh[1].onmouseout = function () {this.children[1].style.display = 'none';$(aItemNav[3]) .css({backgroundColor: 'rgb(39,91,132)'})};
navUlChCh[2].onmouseover = function () {this.children[1].style.display = 'block';$(aItemNav[6]) .css({backgroundColor: '#c6d4df'})};
navUlChCh[2].onmouseout = function () {this.children[1].style.display = 'none';$(aItemNav[6]) .css({backgroundColor: 'rgb(39,91,132)'})};
navUlChCh[3].onmouseover = function () {this.children[1].style.display = 'block';$(aItemNav[7]) .css({backgroundColor: '#c6d4df'})};
navUlChCh[3].onmouseout = function () {this.children[1].style.display = 'none';$(aItemNav[7]) .css({backgroundColor: 'rgb(39,91,132)'})};
navUlChCh[4].onmouseover = function () {$(aItemNav[10]) .css({backgroundColor: '#c6d4df'})};
navUlChCh[4].onmouseout = function () {$(aItemNav[10]) .css({backgroundColor: 'rgb(39,91,132)'})};
navUlChCh[5].onmouseover = function () {$(aItemNav[11]) .css({backgroundColor: '#c6d4df'})};
navUlChCh[5].onmouseout = function () {$(aItemNav[11]) .css({backgroundColor: 'rgb(39,91,132)'})};

var btnUl = $('.botton_ul').children();
var ptoUl = $('.box_ul').children();



var smPoto = $('.the_center_of_content_right_choice_content_box_right_center').children();
// console.log(smPoto.length);
var smPotoCh = smPoto.children();
// console.log(smPotoCh[1].src);
var binPotBc = $('.the_center_of_content_right_choice_content_box_left').children();
// console.log(binPotBc[1]);

smPoto[0].onmouseover = function () {binPotBc[0].setAttribute("src",smPotoCh[0].src);};
smPoto[1].onmouseover = function () {binPotBc[0].setAttribute("src",smPotoCh[1].src);};
smPoto[2].onmouseover = function () {binPotBc[0].setAttribute("src",smPotoCh[2].src);};
smPoto[3].onmouseover = function () {binPotBc[0].setAttribute("src",smPotoCh[3].src);};
smPoto[4].onmouseover = function () {binPotBc[1].setAttribute("src",smPotoCh[4].src);};
smPoto[5].onmouseover = function () {binPotBc[1].setAttribute("src",smPotoCh[5].src);};
smPoto[6].onmouseover = function () {binPotBc[1].setAttribute("src",smPotoCh[6].src);};
smPoto[7].onmouseover = function () {binPotBc[1].setAttribute("src",smPotoCh[7].src);};
smPoto[8].onmouseover = function () {binPotBc[2].setAttribute("src",smPotoCh[8].src);};
smPoto[9].onmouseover = function () {binPotBc[2].setAttribute("src",smPotoCh[9].src);};
smPoto[10].onmouseover = function () {binPotBc[2].setAttribute("src",smPotoCh[10].src);};
smPoto[11].onmouseover = function () {binPotBc[2].setAttribute("src",smPotoCh[11].src);};
smPoto[12].onmouseover = function () {binPotBc[3].setAttribute("src",smPotoCh[12].src);};
smPoto[13].onmouseover = function () {binPotBc[3].setAttribute("src",smPotoCh[13].src);};
smPoto[14].onmouseover = function () {binPotBc[3].setAttribute("src",smPotoCh[14].src);};
smPoto[15].onmouseover = function () {binPotBc[3].setAttribute("src",smPotoCh[15].src);};
smPoto[16].onmouseover = function () {binPotBc[4].setAttribute("src",smPotoCh[16].src);};
smPoto[17].onmouseover = function () {binPotBc[4].setAttribute("src",smPotoCh[17].src);};
smPoto[18].onmouseover = function () {binPotBc[4].setAttribute("src",smPotoCh[18].src);};
smPoto[19].onmouseover = function () {binPotBc[4].setAttribute("src",smPotoCh[19].src);};
smPoto[20].onmouseover = function () {binPotBc[5].setAttribute("src",smPotoCh[20].src);};
smPoto[21].onmouseover = function () {binPotBc[5].setAttribute("src",smPotoCh[21].src);};
smPoto[22].onmouseover = function () {binPotBc[5].setAttribute("src",smPotoCh[22].src);};
smPoto[23].onmouseover = function () {binPotBc[5].setAttribute("src",smPotoCh[23].src);};
smPoto[24].onmouseover = function () {binPotBc[6].setAttribute("src",smPotoCh[24].src);};
smPoto[25].onmouseover = function () {binPotBc[6].setAttribute("src",smPotoCh[25].src);};
smPoto[26].onmouseover = function () {binPotBc[6].setAttribute("src",smPotoCh[26].src);};
smPoto[27].onmouseover = function () {binPotBc[6].setAttribute("src",smPotoCh[27].src);};
smPoto[28].onmouseover = function () {binPotBc[7].setAttribute("src",smPotoCh[28].src);};
smPoto[29].onmouseover = function () {binPotBc[7].setAttribute("src",smPotoCh[29].src);};
smPoto[30].onmouseover = function () {binPotBc[7].setAttribute("src",smPotoCh[30].src);};
smPoto[31].onmouseover = function () {binPotBc[7].setAttribute("src",smPotoCh[31].src);};
smPoto[32].onmouseover = function () {binPotBc[8].setAttribute("src",smPotoCh[32].src);};
smPoto[33].onmouseover = function () {binPotBc[8].setAttribute("src",smPotoCh[33].src);};
smPoto[34].onmouseover = function () {binPotBc[8].setAttribute("src",smPotoCh[34].src);};
smPoto[35].onmouseover = function () {binPotBc[8].setAttribute("src",smPotoCh[35].src);};
smPoto[36].onmouseover = function () {binPotBc[9].setAttribute("src",smPotoCh[36].src);};
smPoto[37].onmouseover = function () {binPotBc[9].setAttribute("src",smPotoCh[37].src);};
smPoto[38].onmouseover = function () {binPotBc[9].setAttribute("src",smPotoCh[38].src);};
smPoto[39].onmouseover = function () {binPotBc[9].setAttribute("src",smPotoCh[39].src);};
smPoto[40].onmouseover = function () {binPotBc[10].setAttribute("src",smPotoCh[40].src);};
smPoto[41].onmouseover = function () {binPotBc[10].setAttribute("src",smPotoCh[41].src);};
smPoto[42].onmouseover = function () {binPotBc[10].setAttribute("src",smPotoCh[42].src);};
smPoto[43].onmouseover = function () {binPotBc[10].setAttribute("src",smPotoCh[43].src);};
smPoto[44].onmouseover = function () {binPotBc[11].setAttribute("src",smPotoCh[44].src);};
smPoto[45].onmouseover = function () {binPotBc[11].setAttribute("src",smPotoCh[45].src);};
smPoto[46].onmouseover = function () {binPotBc[11].setAttribute("src",smPotoCh[46].src);};
smPoto[47].onmouseover = function () {binPotBc[11].setAttribute("src",smPotoCh[47].src);};



function zgl() {

for(var i = 0,len=btnUl.length;i<len;i++) {
    btnUl[i].onmouseover = function () {
        var t = $(this).index();
        // console.log(t);
        for (var j = 0; j < len; j++) {
            ptoUl[j].className = '';
            ptoUl[t].className = 'box_li';
            $(btnUl[j]).css({backgroundColor:"rgb(53,73,89)"});
            $(btnUl[t]).css({backgroundColor:'#6a8caa'})
        }
    }
}

$('.the_center_of_content_right_choice_left').on('click', function () {
    var le = document.getElementsByClassName('box_li');
    var liIn = $(le).index();
    // console.log(liIn);
    if (liIn == 0){
        liIn = 11;
        // console.log(liIn);
        ptoUl[liIn].className = 'box_li';
        ptoUl[0].className = '';
        $(btnUl[11]).css({backgroundColor:"rgb(53,73,89)"});
        $(btnUl[liIn]).css({backgroundColor:'#6a8caa'})
    }else if(liIn != 0){
        // console.log(liIn);
        ptoUl[liIn].className = '';
        ptoUl[liIn-1].className = 'box_li';
        $(btnUl[liIn]).css({backgroundColor:"rgb(53,73,89)"});
        $(btnUl[liIn+1]).css({backgroundColor:'#6a8caa'})
    }

});
$('.the_center_of_content_right_choice_right').on('click', function () {
    var le = document.getElementsByClassName('box_li');
    var liIn = $(le).index();
    console.log(liIn);
    if (liIn==11){
        liIn = 0;
        ptoUl[liIn].className = 'box_li';
        ptoUl[11].className = '';
        $(btnUl[11]).css({backgroundColor:"rgb(53,73,89)"});
        $(btnUl[liIn]).css({backgroundColor:'#6a8caa'})
    }else if(liIn !=11){
        ptoUl[liIn].className = '';
        ptoUl[liIn+1].className = 'box_li';
        $(btnUl[liIn]).css({backgroundColor:"rgb(53,73,89)"});
        $(btnUl[liIn+1]).css({backgroundColor:'#6a8caa'})
    }
});


timer = setInterval(autoPlay,2000);
function autoPlay() {
    var le = document.getElementsByClassName('box_li');
    var liIn = $(le).index();
    // console.log(liIn);
    if (liIn==11){
        liIn = 0;
        ptoUl[liIn].className = 'box_li';
        ptoUl[11].className = '';
        $(btnUl[11]).css({backgroundColor:"rgb(53,73,89)"});
        $(btnUl[liIn]).css({backgroundColor:'#6a8caa'})
    }else if(liIn !=11){
        ptoUl[liIn].className = '';
        ptoUl[liIn+1].className = 'box_li';
        $(btnUl[liIn]).css({backgroundColor:"rgb(53,73,89)"});
        $(btnUl[liIn+1]).css({backgroundColor:'#6a8caa'})
    }
}
    function zgl_stop() {
        var le = document.getElementsByClassName('big_img');
        var le1 = document.getElementsByClassName('the_center_of_content_right_choice_content_box_right_center1');
        var le2= document.getElementsByClassName('the_center_of_content_right_choice_content_box_right_center2');
        var le3 = document.getElementsByClassName('the_center_of_content_right_choice_content_box_right_center3');
        var le4 = document.getElementsByClassName('the_center_of_content_right_choice_content_box_right_center4');

        console.log(le);
        $(le).on('mouseenter', function () {
            clearInterval(timer);
        });
        $(le).on('mouseout',function () {
            timer = setInterval(autoPlay, 2000);
        });
        $(le1).on('mouseenter', function () {
            clearInterval(timer);
        });
        $(le1).on('mouseout',function () {
            timer = setInterval(autoPlay, 2000);
        });
        console.log(le);
        $(le2).on('mouseenter', function () {
            clearInterval(timer);
        });
        $(le2).on('mouseout',function () {
            timer = setInterval(autoPlay, 2000);
        });
        console.log(le);
        $(le3).on('mouseenter', function () {
            clearInterval(timer);
        });
        $(le3).on('mouseout',function () {
            timer = setInterval(autoPlay, 2000);
        });
        console.log(le);
        $(le4).on('mouseenter', function () {
            clearInterval(timer);
        });
        $(le4).on('mouseout',function () {
            timer = setInterval(autoPlay, 2000);
        })
    }
    zgl_stop();
}
zgl();

var zgl_top_nav = document.getElementsByClassName('a_item_nav');
// $(zgl_top_nav).on('mouseout',function () {
//     $('.the_center_of_content_right_nav_ul').css({backgroundColor:'rgb(39,91,133)'})
// })
$(".a_item_nav").unbind("mouseenter").unbind("mouseleave");