/**
 * Created by xdyuan on 16/12/27.
 */


'use strict';

(function (angular) {

    var module_theaters = angular.module('moviecat.top250', ['ngRoute']);
    module_theaters.config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/top250', {
                templateUrl : './module/top_250/view.html',
                controller : 'Top250Controller'
            })
    }]);

    module_theaters.controller('Top250Controller', ['$scope', function ($scope) {
        


    }]);

})(angular);

