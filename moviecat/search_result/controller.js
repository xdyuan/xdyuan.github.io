/**
 * Created by xdyuan on 16/12/29.
 */



//http://api.douban.com/v2/movie/search?q=123

(function (angular) {

    var search = angular.module('moviecat.search', ['ngRoute', 'moviecat.service.http']);
    search.config(['$routeProvider','$locationProvider', function ($routeProvider, $locationProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider
        //需要在list_item里的模板里面设置，
            .when('/search/:querystring', {
                templateUrl: 'movie_detail/view.html',
                controller : 'DetailController'
            })
    }]);


})(angular);