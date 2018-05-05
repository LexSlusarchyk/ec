(function () {
    'use strict';
    angular
        .module('app')
        .controller('DashboardNewsController', DashboardNewsController);

    DashboardNewsController.$inject = ['$stateParams', 'newsService', 'modalService', 'confirmService'];

    function DashboardNewsController($stateParams, newsService, modalService, confirmService) {
        var vm = this;

    
        vm.showDeleteArticleModal = showDeleteArticleModal;

        activate();

        function activate() {

           getNews();
        }



        function getNews() {
            newsService.getNews().then(function(data) {
                vm.news = data.data;
                console.log(data);
            })
        }


        function showDeleteArticleModal(article) {
            var message = "Are you sure you want to delete this article?";
            confirmService.openConfirmModal(message).then(function(response){
                if (response) {
                    newsService.deleteArticle(article.id).then(function(data){
                        console.log(article.id);
                        getNews();
                    });
                }
            });
        }

    
    }
})();


