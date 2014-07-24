'use strict';

/**
 * @ngdoc function
 * @name hw3App.controller:WordCountAnalysisCtrl
 * @description
 * # WordCountAnalysisCtrl
 * Controller of the hw3App
 */
angular.module('hw3App')
    .controller('WordCountAnalysisCtrl', function ($scope) {
        $scope.pieData = [
            { key: "One", y: 5 },
            { key: "Two", y: 2 },
            { key: "Three", y: 9 },
            { key: "Four", y: 7 },
            { key: "Five", y: 4 },
            { key: "Six", y: 3 },
            { key: "Seven", y: 9 }
        ];
        $scope.xFunction = function(){
            return function(d) {
                return d.key;
            };
        };
        $scope.yFunction = function(){
            return function(d) {
                return d.y;
            };
        };
    });
