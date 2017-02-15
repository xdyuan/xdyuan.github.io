/**
 * Created by xdyuan on 16/8/30.
 */
(function (w) {
    var F = function (sel, ctx) {
        return this.init(sel, ctx);
    };
    F.prototype.init = function (sel, ctx) {
        if (!sel){
            return this;
        }
        if (typeof sel === 'string'){
            var nodeList = (ctx || document).querySelectorAll(sel);
            //老的实现方式需要通过this.elements【i】来访问获取的每个元素，而新的方式可以通过this[i]形式访问
            //伪数组形式其实就是json对象 -- 恰巧我们可以用json[i]访问每个值，但是通过length无法获取长度，我们可以添加一个length属性，来保存个数
            this.length = nodeList.length;

            for (var i=0; this.length > i; i++){
                this[i] = nodeList[i];
            }
        }else {
            this[0] = sel;
            this.length = 1;
        }
        //sel是选择器,ctx是dom对象
        return this;
        
    };
    
    //双对象法则,引入美元符号
    var xdyuan = function (sel, ctx) {
        return new F(sel, ctx);
    };

    //下面这代码,就是实现了之前的extend一样的
    xdyuan.extend = function () {
        var arg = arguments, len = arguments.length;
        var target = null, i = 1;
        if (len == 0){
            //如果没有传参数,那就是啥也不干,返回null
            return null;
        }else if(len == 1){
            //只传递一个参数,那就是给F对象添加功能
            target = F.prototype;
            i--;
        }else {
            //2个参数就是给指定的对象添加功能
            //那么就把指定的对象给target,第一个参数是指定的对象,从第二个参数开始赋值
            target = arg[0];
        }

        for (; i<len; i++){
            for(var key in arg[i]){
                // 传入的参数应该是一个对象
                target[key] = arg[i][key];
            }
        }
        return target;
    };

    w.$ = w.xdyuan = xdyuan;




})(window);

/*公共模块*/
(function (xdyuan) {
    //需要链式访问
    xdyuan.extend({
        each : function(fn) {
            var i=0, length = this.length;
            for (; i<length; i+=1) {
                fn.call(this[i]);
            }
            return this;
        }
    });
    //bu需要链式访问

    /*字符串*/
    xdyuan.extend(xdyuan, {
        camelCase : function(str){
            return str.replace(/\-(\w)/g, function(all, letter){
                return letter.toUpperCase();
            });
        },
        trim : function(str){
            return str.replace(/^\s+|\s+$/g, '')
        },
        //去除左边空格
        ltrim:function(str){
            return str.replace(/(^\s*)/g,'');
        },
        //去除右边空格
        rtrim:function(str){
            return str.replace(/(\s*$)/g,'');
        },
        //ajax - 前面我们学习的
        myAjax:function(URL,fn){
            var xhr = createXHR();	//返回了一个对象，这个对象IE6兼容。
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4){
                    if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
                        fn(xhr.responseText);
                    }else{
                        alert("错误的文件！");
                    }
                }
            };
            xhr.open("get",URL,true);
            xhr.send();

            //闭包形式，因为这个函数只服务于ajax函数，所以放在里面
            function createXHR() {
                //本函数来自于《JavaScript高级程序设计 第3版》第21章
                if (typeof XMLHttpRequest != "undefined") {
                    return new XMLHttpRequest();
                } else if (typeof ActiveXObject != "undefined") {
                    if (typeof arguments.callee.activeXString != "string") {
                        var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
                                "MSXML2.XMLHttp"
                            ],
                            i, len;

                        for (i = 0, len = versions.length; i < len; i++) {
                            try {
                                new ActiveXObject(versions[i]);
                                arguments.callee.activeXString = versions[i];
                                break;
                            } catch (ex) {
                                //skip
                            }
                        }
                    }

                    return new ActiveXObject(arguments.callee.activeXString);
                } else {
                    throw new Error("No XHR object available.");
                }
            }
        },
        //简单的数据绑定formateString
        formateString:function(str, data){
            return str.replace(/@\((\w+)\)/g, function(match, key){
                return typeof data[key] === "undefined" ? '' : data[key]});
        },
        //将json转换成字符串
        sjson:function (json) {
            return JSON.stringify(json);
        },
        //将字符串转成json
        json:function (str) {
            return JSON.stringify(str);
        }
    });
    /*Math*/
    xdyuan.extend(xdyuan, {
        //随机数
        random: function (begin, end) {
            return Math.floor(Math.random() * (end - begin)) + begin;
        }
    });
    /*数据类型校验*/
    xdyuan.extend(xdyuan, {
        //数据类型检测
        isNumber:function (val){
            return typeof val === 'number' && isFinite(val)
        },
        isBoolean:function (val) {
            return typeof val ==="boolean";
        },
        isString:function (val) {
            return typeof val === "string";
        },
        isUndefined:function (val) {
            return typeof val === "undefined";
        },
        isObj:function (str){
            if(str === null || typeof str === 'undefined'){
                return false;
            }
            return typeof str === 'object';
        },
        isNull:function (val){
            return  val === null;
        },
        isArray:function (arr) {
            if(arr === null || typeof arr === 'undefined'){
                return false;
            }
            return arr.constructor === Array;
        }
    });

})(xdyuan);

/*事件*/
(function (xdyuan) {
    //需要链式访问
    xdyuan.extend({
        // 添加事件
        on : function(type, fn){
            var i = this.length - 1;
            if(document.addEventListener){
                for(; i >= 0; i--){
                    this[i].addEventListener(type, fn, false);
                }
            }else if(document.attachEvent){
                for(; i >= 0; i--){
                    this[i].attachEvent('on' + type, fn);
                }
            }else{
                for(; i >= 0; i--){
                    this[i]['on' + type] = fn;
                }
            }
            return this;
        },
        // 解除事件
        un : function(type, fn){
            var i = this.length - 1;
            if(document.removeEventListener){
                for(; i >= 0; i--){
                    this[i].removeEventListener(type, fn);
                }
            }else if(document.detachEvent){
                for(; i >= 0; i--){
                    this[i].detachEvent(type, fn);
                }
            }else{
                for(; i >= 0; i--){
                    this[i]['on' + type] = null;
                }
            }
            return this;
        },
        /*点击*/
        click : function(fn){
            this.on('click',fn);
            return this;
        },
        /*悬浮*/
        hover : function(fnOver,fnOut){
            var i =0 ;
            for(i = 0; i < this.elements.length; i++){
                if(fnOver){
                    this.on("mouseover",fnOver);
                }
                if(fnOut){
                    this.on("mouseout",fnOut);
                }
            }

            return this;
        }
    });
    //不需要链式访问
    xdyuan.extend(xdyuan, {
        // 获取事件对象
        getEvent : function(event){
            return event ? event : window.event;
        }
        // 获取元素
        ,getTarget : function(event){
            var event = this.getEvent(event);
            return event.target || event.srcElement;
        }
        // 阻止冒泡以及捕获
        ,stopPropagation : function(event){
            var event = this.getEvent(event);
            if(event.stopPropagation){
                event.stopPropagation();
            }else{
                event.cancelBubble = true;
            }
        }
        // 阻止默认行为
        ,preventDefault : function(event){
            var event = this.getEvent(event);
            if(event.preventDefault){
                event.preventDefault();
            }else{
                event.returnValue = false;
            }
        }
        ,getDetail : function(event){
            var event = this.getEvent(event);
            if(event.wheelDelta){
                return event.wheelDelta;
            }else{
                return -event.detail * 40;
            }
        }
    });

})(xdyuan);

/*css*/
(function (xdyuan) {
    
    xdyuan.extend({
        css : function () {
            var arg = arguments, len = arg.length;
            //没有对象需要设置就直接返回吧
            if(this.length < 1){
                return this;
            }
            if(len == 1){
                //如果只有一个参数只有两种情况  字符串或者json对象
                //字符串就是获取值, json对象就是设置多个属性

                if (xdyuan.isString(arg[0])){
                    //字符串形式取值
                    if (this[0].currentStyle){
                        //获取样式的全局函数
                        //IE
                        return this[0].currentStyle[arg[0]];

                    }else {
                        return getComputedStyle(this[0], false)[arg[0]];

                    }
                }else if(xdyuan.isObj(arg[0])){
                    //json形式,那就需要赋值了{width:100, height:100, color:"red"};
                    for(var key in arg[0]){
                        for(var j=this.length-1; j>=0; j--){
                            this[j].style[key] =arg[0][key];
                        }
                    }
                }
            }else if(len == 2){
                //如果是2个参数就是只设置一个属性
                for(j=this.length-1; j>=0; j--){
                    //这样子的话无论用户传入:"100px"还是数字都可以了
                    this[j].style[arg[0]] = arg[1];
                }
            }
            return this;

        },
        /*隐藏*/
        hide :function () {
            this.each(function () {
               this.style.display = "none";
            });
        },
        show :function () {
            this.each(function () {
                this.style.display = "block";
            });
        },
        width:function (){
            return this[0].clientWidth;
        },
        height:function (){
            return this[0].clientHeight;
        },
        scrollWidth:function (){
            return this[0].scrollWidth;
        },
        scrollHeight:function (){
            return this[0].scrollHeight;
        },
        //元素滚动的时候 如果出现滚动条 相对于左上角的偏移量
        //计算方式 scrollTop scrollLeft
        scrollTop:function (){
            return this[0].scrollTop
        },
        scrollLeft:function (){
            return this[0].scrollLeft
        },
        //文档视口的高度和宽度
        wWidth:function (){
            return document.documentElement.clientWidth;
        },
        wHeight:function (){
            return document.documentElement.clientHeight;
        },
        //文档滚动区域的整体的高和宽
        wScrollHeight:function () {
            return document.body.scrollHeight;
        },
        wScrollWidth:function () {
            return document.body.scrollWidth;
        },
        //获取滚动条相对于其顶部的偏移
        wScrollTop:function () {
             return window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop;
        },
        //获取滚动条相对于其左边的偏移
        wScrollLeft:function () {
            return document.body.scrollLeft || (document.documentElement && document.documentElement.scrollLeft);
        }

    });
    
})(xdyuan);

/*属性*/
(function (xdyuan) {
    xdyuan.extend({
       attr:function () {
           var arg = arguments;
           var len = arg.length;
           if (this.length < 1){
               return this;
           }
           //只有一个参数不是获取值就是设置多个值
           if(len == 1){
               if(xdyuan.isString(arg[0])){
                   //获取值
                   return this[0].getAttribute(arg[0]);
               }else if(xdyuan.isObj(arg[0])){
                   //设置值{"title":"哈哈", "href":"http://xxx.com"}
                   for(var key in arg[0]){
                       for (var j =0; j<this.length; j++){
                           this[j].setAttribute(key, arg[0][key]);
                       }
                   }

               }
           }else if(len == 2){
               //2个参数就是只设置一个属性
               for ( j =0; j<this.length; j++){
                   this[j].setAttribute(arg[0], arg[1]);
               }
           }

           return this;

       },

       hasClass: function (className) {
            if(!this[0]){
                return this;
            }
           return this[0].className.indexOf(xdyuan.trim(className)) > -1;

       },
        addClass: function (className) {
            //这个写法还存在一点小bug需要修改
            className = xdyuan.trim(classNames);
            for (var i=0,len=this.length; i<len; i++){
               var str = this[i].className;//获取原先的类名
                if(str.indexOf(classNames)<0){//小于0说明原先类名不存在
                    this[i].class += " "+classNames;
                }
            }
            return this;
        },
        removeClass: function (className) {
            var val = xdyuan.trim(className);
            for(var i=0,len=this.length; i<len; i++){
                this[i].className = xdyuan.trim(this[i].className.replace(val, ''));
            }
            return this;
        },
        html: function () {
            var arg = arguments;
            var len = arg.length;
            if(len == 0){
                return this[0].innerHTML;
            }else if(len == 1){
                this.each(function () {
                    this.innerHTML = arg[0];
                })
            }
            return this;
        }
       
    });


})(xdyuan);

/*DOM框架*/
(function (xdyuan) {

    //extend加一个参数就是给  F.prototype, 加2个参数就是给, xdyuan添加属性
    xdyuan.extend(xdyuan, {
        //type是节点类型, value是节点属性,是一个json对象,设置属性. html是节点里面的文字
        create:function (type, value, html) {
            var dom = document.createElement(type);
            this[0].parentNode.appendChild(dom);
            return this.add(dom).attr(value).html(html);
        }

    });
    xdyuan.extend(xdyuan, {

        add:function (dom) {
            this[this.length] = dom;
            this.length++;
            return this;
        },
        //往选择好的地方加入元素
        append : function(child){
            for(var j = this.length - 1; j >= 0; j--){
                for(var i = 0,len = child.length;i<len;i++){
                    this[j].appendChild(doms[i]);
                }
            }
        },
        $id: function (id) {
            return document.getElementById(id);
        },

        tag: function (tag, ctx) {
            if(xdyuan.isString(ctx)){
                ctx = xdyuan.$id(ctx);
            }
            if(ctx){
                return ctx.getElementsByTagName(tag);
            }else {
                return document.getElementsByTagName(tag);
            }
        },
        class: function (className, ctx) {
            var arr = [];
            if(ctx && xdyuan.isString(ctx)){
                ctx = xduan.$id(ctx);
            }else {
                ctx = document;
            }
            if(ctx.getElementsByClassName){
                return ctx.getElementsByClassName(className);
            }else {
                dom = ctx.getElementsByTagName("*");
                for (var i=0, len=dom.length; i<len; i++){
                    if(dom[i].className.indexOf(className) >= 0){
                        arr.push(dom[i]);
                    }
                }
                return arr;
            }
        },
        group : function (content) {
            //content = ".box, #id, div";
            var result = []; doms=[];
            var arr = xdyuan.trim(content).split(",");
            for (var i=0, len=arr.length; i<len; i++){
                var item = xduyan.trim(arr[i]);
                var first = item.charAt(0);
                var index = item.indexOf(first);
                if(first == "."){
                    doms = xdyuan.$class(item.slice(index+1));
                }else if(first == "#"){
                    doms  = [xdyuan.$id(item.slice(index+1))];
                }else {
                    dosm = xdyuan.$tag(item);
                }
                pushArray(doms, result);
            }
            return result;
            function pushArray(doms,result){
                for(var j= 0, domlen = doms.length; j < domlen; j++){
                    result.push(doms[j])
                }
            }
        },

        cengci:function (select) {
            var sel = xdyuan.trim(select).split(" ");
            var result = [];
            var context = [];//临时保存一下result的值
            for(var i=0, len=sel.length; i<len; i++){
                result = [];//每次查询前都清空result
                var item = xdyuan.trim(sel[i]);
                var first = item.charAt(0);
                var index = item.indexOf(first);
            }
            if (first == "#"){
                //这样就是默认第一个就是id选择器,一般id都写在第一个
                pushArray([xdyuan.$id(item.slice(index+1))]);
                context = result;
            }else if (first == "."){

            }

            function pushArray(doms){
                for(var j= 0, domlen = doms.length; j < domlen; j++){
                    result.push(doms[j])
                }
            }
        },
        //多组+层次
        select:function (str) {
            var result = [];
            var item = xdyuan.trim(str).split(',');
            for(var i = 0, glen = item.length; i < glen; i++){
                var select = xdyuan.trim(item[i]);
                var context = [];
                context = xdyuan.$cengci(select);
                pushArray(context);
            }
            return result;

            //封装重复的代码
            function pushArray(doms){
                for(var j= 0, domlen = doms.length; j < domlen; j++){
                    result.push(doms[j])
                }
            }
        }

    });
    
})(xdyuan);

