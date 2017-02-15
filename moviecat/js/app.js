/**
 * Created by xdyuan on 16/12/27.
 */


(function (angular) {

    var module = angular.module('moviecat', [
        'ngRoute',
        'moviecat.movie_detail',  //这里必须detail在前面
        'moviecat.list_item'

    ]);
    //配置路由
    module.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        //设置这个属性， 防止url出错。
        $locationProvider.hashPrefix('');
        $routeProvider
            .otherwise({
                redirectTo: '/in_theaters/1'
            })
    }]);

    module.controller('MovieCatController', ['$scope','$location', function ($scope, $location) {
    //
        $scope.$loca = $location;
        $scope.type = '';
        $scope.$watch('$loca.path()', function (now, old) {
            //console.log(now);
            if(now.startsWith('/in_theaters')){
                $scope.type = 'in_theaters'
            }else if(now.startsWith('/coming_soon')){
                $scope.type = 'coming_soon'
            }else if(now.startsWith('/top250')){
                $scope.type = 'top250'
            }

            //console.log($scope.type);
        });

    //
    }]);


    //搜索模块
    module.controller('SearchController', ['$scope','$route', function ($scope, $route) {

        $scope.input = '';
        $scope.search = function () {
            //console.log($scope.input);

            $route.updateParams({'category' : 'search', 'q' : $scope.input});

        }

    }]);


})(angular);