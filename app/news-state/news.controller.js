(function () {
    'use strict';

    angular
        .module('app')
        .controller('NewsController', NewsController);

    NewsController.$inject = ['news'];

    function NewsController(news) {
        var vm = this;



        activate();

        function activate() {

            news.getAll().then(function (data) {
                vm.news = data.data;
                console.log(vm.news);
            });
        }

    }

})();