/**
 * Created by xdyuan on 16/12/27.
 */


(function (angular) {

    'use strict';

    var http = angular.module('moviecat.service.http', []);
    http.service('HttpService', [
        '$window',
        '$document',
        function ($window, $document) {
            this.jsonp = function(url, data, callback) {

                //取得一个随机数， 并且变成一个字符串
                var myJsonFuncName = Math.random().toString().replace('.', '');
                var myCallBack = 'my_json_cb' + myJsonFuncName; //回调函数的名字

                //-1  挂载回调函数
                //$window[myCallBack] = callback;

                //http://api.douban.com/v2/movie/in_theaters
                //0 配置url
                var queryString = url.indexOf('?')==-1 ? '?' : '&';
                for (var key in data){
                    queryString += key + '=' + data[key] + '&'
                }
                //1  处理回调函数
                //
                //var myJsonFuncName = Math.random().toString().replace('.', '');
                queryString += 'callback=' + 'my_json_cb' + myJsonFuncName;

                //2 创建一个script标签
                var script = $document[0].createElement('script');
                script.src = url+queryString;


                //3挂载回调函数
                //这个得在一开始的时候挂载， 否则没法用
                $window[myCallBack] = function (data) {
                  callback(data);
                  //console.log(url+queryString);
                  //挂载完之后就移除
                  $document[0].body.removeChild(script);
                };

                //4 将script标签放到文档中
                $document[0].body.appendChild(script);

            }

    }]);

})(angular);