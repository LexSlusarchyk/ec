(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('capitalsService', capitalsService);

    capitalsService.$inject = ['$q', '$http', '$localStorage', 'CapitalsList'];
    /* @ngInject */
    function capitalsService($q, $http, $localStorage, CapitalsList) {


        var service = {
            data: new CapitalsList(),
            reset: reset,
            remove: remove
        };

        init();

        return service;

        function init() {
            service.data.getList();
        }



        function reset() {                                              // reset city list to default
            service.data.reset();
        }


        function remove(item) {                     //delete city from list
            var index = service.data.indexOf(item);
            service.data.splice(index, 1);
            updateStorage();
        }


    }
})();