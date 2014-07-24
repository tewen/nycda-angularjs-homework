'use strict';

/**
 * @ngdoc service
 * @name hw3App.newYorkTimes
 * @description
 * # newYorkTimes
 * Factory in the hw3App.
 */
angular.module('hw3App').value('articlesTransformer', function (articles) {
    articles = JSON.parse(articles);
    if (articles.response && articles.response.docs) {
        return articles.response.docs;
    }
    return articles;
});
angular.module('hw3App')
    .factory('newYorkTimes', ['$http', 'articlesTransformer',
        function ($http, articlesTransformer) {
        // Public API here
        var API_KEY = '052861d142cf4eb7fa12bb79781fdbe1:11:69591426';
        return {
            articles: function (searchTerm) {
                return $http({
                    method: 'GET',
                    transformResponse: articlesTransformer,
                    url: 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + searchTerm + '&api-key=' + API_KEY});
            }
        };
    }]);
