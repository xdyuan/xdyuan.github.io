/**
 * Created by xdyuan on 16/12/28.
 */
'use strict';

(function (angular) {

    angular.module('moviecat.directives.auto_focus', [])
        .directive('autoFocus', ['$location', function ($location) {

            var path = $location.path();
            console.log(path);//  /top250/1

            return {
                restrict: 'A',
                link : function ($scope, ele, attr, controller) {
                    ele.on('click', function () {
                        //jqlite
                        ele.parent().children().removeClass('active');
                        ele.addClass('active');
                    });
                }
            }
            
        }]);

})(angular);

