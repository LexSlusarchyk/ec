(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['capitalsService', 'modalService'];

    function HomeController(capitalsService, modalService) {
        var vm = this;

        vm.capitalsService = capitalsService;
        vm.openAddBaseCityModal = openAddBaseCityModal;
        vm.myFilter = myFilter;

        vm.filterOptions = [
            {
                title: 'Visited',
                key: 'visited'
            },
            {
                title: 'Neutral',
                key: 'neutral'
            },
            {
                title: 'Planning to visit',
                key: 'going_to_visit'
            }
        ];

        getCapitals();

        function getCapitals() {

            capitalsService.getAll().then(function(response) {

                vm.capitals = response.capitals;       //Непотрібний ????

                console.log(vm.capitalsService.data);
                console.log(vm.capitalsService);

            });
        }


        function openAddBaseCityModal() {
            modalService.showAddCityModal();
        }

        vm.getClass = function (capital) {
            if(capital.status.visited) {
                return {
                    visited: capital.status.visited === true
                };
            } else {
                return {
                    going_to_visit: capital.status.going_to_visit === true
                };
            }
        };


        function myFilter(actual) {
            if (!vm.activeFilter) { return true }

            return actual.status[vm.activeFilter];
        }



    }
})();


