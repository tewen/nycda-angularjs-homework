'use strict';

/**
 * @ngdoc function
 * @name hw3App.controller:TestfbCtrl
 * @description
 * # TestfbCtrl
 * Controller of the hw3App
 */
angular.module('hw3App')
    .controller('TestfbCtrl',
    ['$scope', 'firebaseRef', 'syncData',
        function ($scope, firebaseRef, syncData) {
            syncData('/articles').$bind($scope, 'addedArticles');

            var articlesRef = firebaseRef('/articles');

            //Adding an article by name
            $scope.articleName = "";
            $scope.onAddArticle = function () {
                articlesRef.push({title: $scope.articleName});
            };
        }]);
