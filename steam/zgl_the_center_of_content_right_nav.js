/**
 * Created by imac on 16/12/6.
 */
var nav = document.getElementsByClassName('the_center_of_content_right_nav_ul')[0].children[0];
var navStl = document.getElementsByClassName('the_center_of_content_right_nav');
$(navStl).css({backgroundColor:'#2A4758'});
console.log($('.the_center_of_content_right_nav_ul').children('ul').children('li'));
nav.children[0].children[0].onmouseover = function () {
    $(this).next('ul')[0].style.display = 'block';
    var thisA = $(this).next('ul').find('a');
    $(this).next('ul').find('li').css({
        height:30,
        bordr:'1px solid black'
    });
    $(thisA).css({
        backgroundColor:'#c6d4df',
        width:100,
        height:30
    })
};

nav.children[0].children[0].onmouseout = function () {
    $(this).next('ul')[0].style.display = 'none';
};
nav.children[1].children[0].onmouseover = function () {
    $(this).next('ul')[0].style.display = 'block';
    var thisA = $(this).next('ul').find('a');
    $(this).next('ul').find('li').css({
        height:30
    });
    $(thisA).css({
        backgroundColor:'#c6d4df',
        width:100,
        height:30
    })
};
nav.children[1].children[0].onmouseout = function () {
    $(this).next('ul')[0].style.display = 'none';
};

nav.children[2].children[0].onmouseover = function () {
    $(this).next('ul')[0].style.display = 'block';
    var thisA = $(this).next('ul').find('a');
    $(this).next('ul').find('li').css({
        height:30
    });
    $(thisA).css({
        backgroundColor:'#c6d4df',
        width:100,
        height:30
    })
};
nav.children[2].children[0].onmouseout = function () {
    $(this).next('ul')[0].style.display = 'none';
};
nav.children[3].children[0].onmouseover = function () {
    $(this).next('ul')[0].style.display = 'block';
    var thisA = $(this).next('ul').find('a');
    $(this).next('ul').find('li').css({
        height:30
    });
    $(thisA).css({
        backgroundColor:'#c6d4df',
        width:100,
        height:30
    })
};
nav.children[3].children[0].onmouseout = function () {
    $(this).next('ul')[0].style.display = 'none';
};

