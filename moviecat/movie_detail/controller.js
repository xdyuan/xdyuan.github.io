/**
 * Created by xdyuan on 16/12/28.
 */
//api:  http://api.douban.com/v2/movie/subject/26389069




(function (angular) {

    var detail = angular.module('moviecat.movie_detail', ['ngRoute','moviecat.service.http']);
    detail.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider
            //需要在list_item里的模板里面设置，
            .when('/detail/:id', {
                templateUrl: 'movie_detail/view.html',
                controller : 'DetailController'
            })
    }]);

    //http://api.douban.com/v2/movie/detail?start=259116930&count=10&callback=my_json_cb04060954339112872

    detail.controller('DetailController',  [
        '$scope',
        '$routeParams',
        'HttpService',
        '$document',
        function ($scope,$routeParams,HttpService,$document) {

            // var url = 'http://api.douban.com/v2/movie/subject/'+$routeParams.id +'?callback=detailCallback';
            //
            // var eleScript = $document[0].createElement('script');
            // eleScript.src = url;
            // $document[0].body.appendChild(eleScript);
            $scope.title = '';
            $scope.description = '';
            $scope.altUrl = '';
            HttpService.jsonp('http://api.douban.com/v2/movie/subject/'+$routeParams.id, {}, function (data) {
                // console.log(data);
                console.log( data.title);
                $scope.title = data.title;
                $scope.description = data.summary;
                $scope.altUrl = data.alt;
                $scope.$apply();
            });



   }]);

})(angular);
