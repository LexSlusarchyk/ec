(function() {
    'use strict';

    angular
        .module('app')
        .factory('newsService', newsService);

    newsService.$inject = ['$q', '$http'];
    /* @ngInject */
    function newsService($q, $http) {


        var service = {
            getNews: getNews,
            getLastNews: getLastNews,
            getArticle: getArticle,
            createArticle: createArticle,
            editArticle: editArticle,
            deleteArticle: deleteArticle
        };

        return service;

        function getNews(catId) {
            var defered = $q.defer();
            var query;
            if (catId) {
                query = '/api/news/category/' + catId;
            } else {
                query = '/api/news';
            }

            $http.get(query).then(function(data){
                defered.resolve(data);
            });

            return defered.promise;
        }

        function getLastNews() {
            var defered = $q.defer();
            var query = apiUrl + '/api/news/last';

            $http.get(query).then(function(data){
                defered.resolve(data);
            });

            return defered.promise;
        }

        function getArticle(id) {
            var defered = $q.defer();
            var query = apiUrl + '/api/news/' + id;

            $http.get(query).then(function(data){
                defered.resolve(data);
            });
            return defered.promise;
        }

        function createArticle(article) {
            var defered = $q.defer();
            var query = apiUrl + '/api/news';
            $http.post(query, article).then(function(data){
                defered.resolve(data);
            });
            return defered.promise;
        }

        function editArticle(article) {
            var defered = $q.defer();
            var query = apiUrl + '/api/news/' + article.id;
            var requestBody = globalConfig.filterFalseKeys(article);

            $http.put(query, requestBody).then(function(data){
                defered.resolve(data);
            });
            return defered.promise;
        }


        function deleteArticle(id) {
            var defered = $q.defer();
            var query = apiUrl + '/api/news/' + id;

            $http.delete(query).then(function(data){
                defered.resolve(data);
            });
            return defered.promise;
        }



    }
})();


