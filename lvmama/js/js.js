/**
 * Created by huiwenjiaoyu75 on 16/12/3.
 */
window.onload=function () {
    var method=document.getElementById('JS_public');
    var gonlueImg=document.getElementById('gonlue-img');
    var aImg=['images/gonlue-pic.jpg','images/bb.jpg','images/cc.jpg','images/dd.jpg','images/ee.jpg','images/ff.jpg'];
    //console.log(method);
    console.log(aImg);
    var Mt_li=method.children;
    for(var i=0,len=Mt_li.length;i<len;i++){
        Mt_li[i].index=i;
        Mt_li[i].onclick=function () {
            
            for(var j=0,len=Mt_li.length;j<len;j++){
                Mt_li[j].className="";

            }
            gonlueImg.src=aImg[this.index];


            this.className="active";
        }
    }
    var lyb=document.getElementById('JS_lyb');
    var lyb_info=document.getElementById('lvyoubao-info');
    var timer=null;
    var num=0;
    timer=setInterval(autoplay,500);
    function autoplay() {
        num=num-1;
        num<=-410?num=0:num;
        lyb.style.top=num+'px';
        // console.log(lyb.style.top);
    }
    lyb_info.onmouseover=function () {
        clearInterval(timer);
    };
    lyb_info.onmouseout=function () {
        timer=setInterval(autoplay,500);
    }
    var lyb_other=document.getElementById('gonlue-other');
    var lyb_li=lyb_other.children;
    for(var i=0,len=lyb_li.length;i<len;i++){
        lyb_li[i].onmouseover=function () {
            this.style.top=this.offsetTop-5+'px';
        };
        lyb_li[i].onmouseout=function () {
            this.style.top=this.offsetTop+5+'px';
        }
    }
    var links_dd=document.getElementById('links_dd');
    var btn_links=document.getElementById('btn_links');
    var ddH= links_dd.style.height;
    var flag=true;
    btn_links.onclick=function () {
        if(flag){
            btn_links.innerHTML="收起";
            links_dd.className="current";


            flag=false;
            
        }else {
            links_dd.className="";
            btn_links.innerHTML="更多";
            flag=true;
        }

    }
}

