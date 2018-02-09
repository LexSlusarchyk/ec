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

        getCapitals();

        function getCapitals() {

            capitalsService.getAll().then(function(response) {

                vm.capitals = response.capitals;

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

    }
})();


