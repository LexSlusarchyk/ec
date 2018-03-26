(function () {
    'use strict';

    angular
        .module('app')
        .controller('NewsController', NewsController);

    NewsController.$inject = [];

    function NewsController() {
        var vm = this;

 //       vm.news = new ArticlesList();

        activate();

        function activate() {
 //           vm.news.getRemote();
        }

    }

})();