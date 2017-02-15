/**
 * Created by xdyuan on 16/11/22.
 */
//封装一个函数, 获取页面卷去的left和top值, 返回的数据类型用json包装
function scroll() {
    if(window.pageYOffset != null){  //ie9+  和其他浏览器
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }else if(document.compatMode == 'CSS1Compat'){
        //标准浏览器
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }else {
        return {
            left: document.body.scrollLeft,
            top: document.body.scrollTop
        }
    }
}

//获取课可见区域的宽度
function client() {
    if(window.innerWidth != null){  //ie9+  和其他浏览器
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }else if(document.compatMode == 'CSS1Compat'){
        //标准浏览器
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }
    }else {
        return {
            width: document.body.clientWidth,
            height: document.body.clientHeight
        }
    }
}

function $(id) {
    return document.getElementById(id);
}

//隐藏显示
function show(obj) {
    obj.style.display = 'block';
}
function hide(obj) {
    obj.style.display = 'none';
}


//动画
//缓动   单个DOM
/*function animate(obj, target) {
    clearInterval(obj.timer);
    var step = 0;
    obj.timer = setInterval(function () {
        //因为我们要到达target位置, 所以target必须放在前面作为被减数
        step = (target - obj.offsetLeft) / 10;
        console.log(step);
        step = step > 0 ? Math.ceil(step) :  Math.floor(step);
        //设置坐直
        obj.style.left = obj.offsetLeft + step + 'px';
        if(target == obj.offsetLeft){
            clearInterval(obj.timer);
            return false;
        }
    }, 30);
}*/

function animate_yunsu(obj, target) {
    //判断方向   得判断当前位置和target位置, 决定步长的正负, 也就是方向
    clearInterval(obj.timer);
    //判断方向
    var speed = obj.offsetLeft < target ? 15 : -15;
    var ret = 0;
    obj.timer = setInterval(function () {
        //获取当前位置和目标位置的差值, 并且取绝对值
        ret = Math.abs(target-obj.offsetLeft);
        if(ret < 15){
            clearInterval(obj.timer);
            //调到target的位置, 当小于5px的偏差时, 直接跳转到目标位置
            obj.style.left = target + 'px';
            //return false;  //保险起见写一个return
        }else {
            obj.style.left = obj.offsetLeft + speed + 'px';
        }
    }, 30);
}



function animate(obj, json, fn) {
    clearInterval(obj.timer);
    var flag;
    obj.timer = setInterval(function () {

        //这个flag用于判断是否应该停止定时器,如果是true停止,
        flag = true; //必须写在for-in循环外面

        //遍历json数据, 获取每一个css属性,
        for(var attr in json){
            //获取每一个属性的当前属性值
            var current = 0;
            if(attr == 'opacity'){ //透明度处理
                current = Math.round(parseInt(getStyle(obj, attr)*100)) || 0;
                console.log(current);
            }else {
                current = parseInt(getStyle(obj, attr));
            }


            // 追梦赤子心  -----  赵远杰
            // 残酷月光 =====  徐鹏程
            // 不要说话 -------  陈佳辉

            //计算步长, 目标位置 - 当前位置
            var step = (json[attr] - current) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);

            //设置每一个属性的属性值
            if(attr == 'opacity'){
                //兼容着写
                if('opacity' in obj.style){  //标准浏览器
                    obj.style.opacity = (current + step)/100;
                }else{
                    //ie
                    obj.style.filter = 'alpha(opacity='+(current+step)+')';
                }
            }else {
                obj.style[attr] = current + step + 'px';
            }

            //还没停止的动作
            if(current != json[attr]){
                flag = false;
            }
        }
        if(flag){
            //动画完成
            clearInterval(obj.timer);
            //判断回调函数是否存在, 存在就执行.
            if(fn){
                fn();
            }
        }

    }, 30);
}


//获取响应的样式
function getStyle(dom, attr) {
    if(dom.currentStyle){   //ie写法
        return dom.currentStyle[attr];
    }else {
        return window.getComputedStyle(dom, null)[attr]; //w3c  标准浏览器
    }
}


