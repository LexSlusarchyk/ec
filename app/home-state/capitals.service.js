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
            changeStatus: changeStatus,
            reset: reset

        };

        return service;

        function add(city) {
            service.data.push(city);    // add new city to list
            updateStorage();            //save change in list to localStorage

        }

        function getAll() {             //fetch city list from localStorage or defalt list if localStorage is epmty
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
            var capitals = [];                              //create new array for city

            for (var i = 0; i < capitalsList.length; i++) {  // create new object for city with various property
                var item = {
                    title: capitalsList[i],
                    status: {
                        neutral: true,
                        visited: false,
                        going_to_visit: false
                    }

                };

                capitals.push(item);
            }

            return capitals;
        }

        function reset() {                                              // reset city list to default
            var defered = $q.defer();

            $http.get('content/capitals.json').then(function(response){
                service.data = formatCapitalsData(response.data.capitals);
                $localStorage.capitals = service.data;
                defered.resolve(service.data);
            });

            return defered.promise;
        }


        function remove(item) {                     //delete city from list
            var index = service.data.indexOf(item);
            service.data.splice(index, 1);
            updateStorage();
        }

        function updateStorage() {                //update list in storage
            $localStorage.capitals = service.data;
        }


        function changeStatus(item, status) {
            var index = service.data.indexOf(item);

            if (status == 1){
                service.data[index].status.visited = true;
                service.data[index].status.neutral = false;
                service.data[index].status.going_to_visit = false;

            } else {
                service.data[index].status.going_to_visit = true;
                service.data[index].status.neutral = false;
                service.data[index].status.visited = false;
            }

            updateStorage();
        }




    }
})();