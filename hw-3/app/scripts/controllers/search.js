'use strict';

/**
 * @ngdoc function
 * @name hw3App.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the hw3App
 */
angular.module('hw1App', [])

angular.module('hw2App', [])

angular.module('hw3App')
  .controller('SearchCtrl', function ($scope, $resource) {

  });

angular.module('hw4App', ['hw1App', 'hw2App', 'hw3App']).controller('NewCtrl', function ($scope) {

});
