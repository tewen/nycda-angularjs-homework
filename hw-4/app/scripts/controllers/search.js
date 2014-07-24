'use strict';

/**
 * @ngdoc function
 * @name hw3App.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the hw3App
 */
angular.module('hw3App')
    .controller('SearchCtrl', ['$scope', 'newYorkTimes', 'articles',
        function ($scope, newYorkTimes, articles) {

            $scope.onSearch = function (term) {
                newYorkTimes.articles(term).then(function (result) {
                    articles.list = result.data;
                });
            };

        }]);
