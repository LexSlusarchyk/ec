(function() {
    'use strict';

    angular
        .module('myApp')
        .factory('capitalsService', capitalsService);

    capitalsService.$inject = ['$q', '$http', '$localStorage'];
    /* @ngInject */
    function capitalsService($q, $http, $localStorage) {


        var service = {
            data: null,
            add: add,
            getAll: getAll,
            remove: remove,
            reset: reset
        };

        return service;

        function add(city) {
            service.data.push(city);
            updateStorage();
        }

        function getAll() {
            var defered = $q.defer();

            if ($localStorage.capitals) {
                service.data = $localStorage.capitals;
                defered.resolve(service.data);
            } else {
                $http.get('content/capitals.json').then(function(response){
                    service.data = formatCapitalsData(response.data.capitals);
                    $localStorage.capitals = service.data;
                    defered.resolve(service.data);
                });
            }

            return defered.promise;
        }



        function formatCapitalsData(capitalsList) {
            var capitals = [];

            for (var i = 0; i < capitalsList.length; i++) {
                var item = {
                    title: capitalsList[i],
                    visited: false
                };

                capitals.push(item);
            }

            return capitals;
        }

        function reset() {
            $http.get(apiUrl +  '/institutions').then(function(response){
                service.data = response.data;
                $localStorage.capitals = service.data;
            });
        }


        function remove(item) {                     //delete city from list
            var index = service.data.indexOf(item);
            service.data.splice(index, 1);
            updateStorage();
        }

        function updateStorage() {                //update list in storage
            $localStorage.capitals = service.data;
        }

    }
})();