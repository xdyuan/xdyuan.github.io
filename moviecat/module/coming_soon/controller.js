/**
 * Created by xdyuan on 16/12/27.
 */


'use strict';

(function (angular) {

    var module_theaters = angular.module('moviecat.coming_soon', ['ngRoute']);
    module_theaters.config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/coming_soon', {
                templateUrl : './module/coming_soon/view.html',
                controller : 'ComingSoonController'
            })
    }]);

    module_theaters.controller('ComingSoonController', ['$scope', function ($scope) {
        


    }]);

})(angular);

