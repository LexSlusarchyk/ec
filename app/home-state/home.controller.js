(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['capitalsService', 'modalService', 'CapitalsList'];

    function HomeController(capitalsService, modalService, CapitalsList) {
        var vm = this;

        vm.capitalsService = capitalsService;
        vm.capitals = vm.capitalsService.data;
        vm.openAddBaseCityModal = openAddBaseCityModal;
        vm.myFilter = myFilter;

        vm.filterOptions = [
            {
                title: 'Neutral',
                key: 'neutral'
            },
            {
                title: 'Visited',
                key: 'visited'
            },
            {
                title: 'Planning to visit',
                key: 'going_to_visit'
            }
        ];


        function openAddBaseCityModal() {
            modalService.showAddCityModal();
        }


        function myFilter(actual) {
            if (!vm.activeFilter) { return true }

            return actual[vm.activeFilter];
        }



    }
})();


