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

            });
        }


        function openAddBaseCityModal() {
            modalService.showAddCityModal();
        }



    }
})();


