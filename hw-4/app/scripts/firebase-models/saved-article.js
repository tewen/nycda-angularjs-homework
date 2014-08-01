angular.module('hw3App').factory('SavedArticle',
    ['firebaseRef', 'syncData', function (firebaseRef, syncData) {
        var _url = '/savedarticles', _ref = firebaseRef(_url);
        return {
            create: function (article) {
                return _ref.push(article);
            },
            sync: function () {
                return syncData(_url);
            }
        };
    }]);