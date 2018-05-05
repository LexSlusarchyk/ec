(function () {
    'use strict';

    angular
        .module('app')
        .controller('ArticleController', ArticleController);

    ArticleController.$inject = ['$scope', '$stateParams', 'newsService'];

    function ArticleController($scope, $stateParams, newsService) {
        var vm = this;

        var articleId = $stateParams.id;

        

        activate();

        function activate() {
            getArticle();
        }

        function getArticle() {
            newsService.getArticle(articleId).then(function(response) {
                console.log(articleId);
                vm.article = response.data;
                console.log(response);
            })
        }

    }

})();