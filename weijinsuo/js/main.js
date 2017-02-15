/**
 * Created by xdyuan on 16/11/7.
 */
'use strict';

$(function () {


    //完成
  function resize() {
      //获取屏幕的宽度
      var screenWidth = $(window).width();
      console.log(screenWidth);
      //判断是否是下屏幕
      var isSmallScreen = screenWidth < 768;
      //为每一个itme设置不同的背景图片
      $("#main_ad > .carousel-inner > .item").each(function (i, item) {
          var $item = $(item);
          var imgSrc = $item.data(isSmallScreen ? "image-xs" : "image-lg");
          $item.css('backgroundImage', 'url("'+imgSrc+'")');
        
          //因为我们需要小图时， 图片需要等比例缩放， 所以我们使用img标签的方式
          if(isSmallScreen) {
              //这样写完还有问题, 就是图片是640的宽度, 但我们判断的标准是768, 所以需要设置一下css
              $item.html("<img src='"+imgSrc+"' alt=''>");
          }else {
              //防止从小变大时img元素没有消除
              $item.html("");
          }
          

      });
  }

    resize();
    //trigger可以设置一下函数先执行一次, 上面就不用调用了 $(window).on("resize", resize).trigger
    $(window).on("resize", resize);

    
    
    
    
    
    //工具提示
    $('[data-toggle="tooltip"]').tooltip();


    
    
    //横向滚动   
    var ulNavTabs = $(".nav-tabs");
    var width = 0;
    //遍历子元素
    ulNavTabs.children().each(function (index, element) {
       // console.log(element.clientWidth);
        //计算总长度
        width += element.clientWidth;
    });
    //设置宽度
    //这样直接设置在pc端会有问题, 所以需要判断一下
    var screenWidth = $(window).width(); //获取屏幕的宽度
    if(width > screenWidth) {
        ulNavTabs
            .css('width', width)
            .parent().css("overflow-x", "scroll");
    }



    //行为部分给每个a注册点击事件
    var $newsTitle = $(".news-title");
    $("#news .nav-pills a").on("click", function () {
        var $this = $(this);
        //数据保存在data属性里面
        $newsTitle.text($this.data("title"));
    });



    //轮播图手动轮播实现
    //1 获取滑动的方向
    var carousels = $(".carousel");
    console.log(carousels);
    var startX, endX;

    carousels.on('touchstart', function (e) {
        startX = e.originalEvent.touches[0].clientX;
        console.log(e.originalEvent.touches[0].clientX);

    });
    //时时记录不该endX的值
    carousels.on('touchmove', function (e) {
        endX = e.originalEvent.touches[0].clientX;
        // console.log(e.originalEvent.touches[0].clientX);

    });
    carousels.on('touchend', function (e) {
        var distance = startX-endX;
        var range = 50;
        if (Math.abs(distance)>=range){
            //2 实现滑动  看js的组件
            $(this).carousel(distance>0 ? "next":"prev");
        }
    });


    var img = document.createElement("img");
    document.appendChild()



});