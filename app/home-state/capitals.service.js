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
            get: get,
            getAll: getAll,
            reset: reset
        };

        return service;

        function add(inst) {
            var defered = $q.defer();

            $http.post(apiUrl +  '/api/institutions', inst).then(function(data){
                defered.resolve(data);
            });
            return defered.promise;
        }

        function get(instId){
            var defered = $q.defer();
            $http.get(apiUrl +  '/institutions/' + instId).then(function(data){
                defered.resolve(data);
            });
            return defered.promise;
        }

        function getAll() {
            var defered = $q.defer();

            if ($localStorage.capitals) {
                service.data = $localStorage.capitals;
                defered.resolve(service.data);
            } else {
                $http.get('content/capitals.json').then(function(response){
                    service.data = response.data;
                    $localStorage.capitals = service.data;
                    defered.resolve(service.data);
                });
            }

            return defered.promise;
        }

        function reset() {
            $http.get(apiUrl +  '/institutions').then(function(response){
                service.data = response.data;
                $localStorage.capitals = service.data;
            });
        }

    }
})();