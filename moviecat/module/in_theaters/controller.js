/**
 * Created by xdyuan on 16/12/27.
 */


'use strict';

(function (angular) {

    var module_theaters = angular.module('moviecat.in_theaters', ['ngRoute', 'moviecat.service.http']);
    module_theaters.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider
            .when('/in_theaters/:page', {
                templateUrl : './module/in_theaters/view.html',
                controller : 'InTheatersController'
            })
    }]);

    module_theaters.controller('InTheatersController', [
        '$scope',
        '$http',
        '$routeParams',
        'HttpService',
        '$route',
        function ($scope, $http, $routeParams, HttpService, $route) {


        var count = 10;//每页多少项
        var page = parseInt($routeParams.page);//获取当前页码数
        $scope.page = page;//当前页码数
        var start = (page-1) * count;//计算开始请求的位置
        $scope.pageCount = 0    ;//计算总页数
        $scope.subjects = [];
        $scope.total = 0;//总共的数据条数
        $scope.loading = true;//实现一个加载的动画
        HttpService.jsonp('http://api.douban.com/v2/movie/in_theaters', {start:start, count:count}, function (data) {
            console.log(data);
            $scope.title = data.title;
            $scope.subjects = data.subjects;
            $scope.total = data.total;
            $scope.pageCount = Math.ceil($scope.total / count);
            //$apply的作用就是让指定的
            $scope.loading = false;
            $scope.$apply();
        });


        //处理分页的函数， 跳转到第几页就传入页数
        $scope.go = function (page) {
            //安全判断
            if(page >= 1 && page <= $scope.pageCount){
                $route.updateParams({page:page});
            }
        }

    }]);


})(angular);


//$scope.subjects = data.subjects;
/* $scope.message = '';

 $http.get('./module/in_theaters/data.json').then(function (response) {

 //console.log(response);
 if(response.status == 200){
 $scope.subjects = response.data.subjects;
 }else {
 $scope.message = '请求数据失败， 错误信息:'+response.statusText;
 }
 //错误的地方
 }, function (err) {
 console.log(err);
 $scope.message = '请求数据失败， 错误信息'+err.statusText;
 });*/


