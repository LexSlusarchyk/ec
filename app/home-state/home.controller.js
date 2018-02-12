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

        vm.filterOptions = [                        //option for myFilter
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


        function openAddBaseCityModal() {           //open manage-city modal
            modalService.showAddCityModal();
        }


        function myFilter(actual) {                     // filter city in list togle css class
            if (!vm.activeFilter) { return true }

            return actual[vm.activeFilter];
        }



    }
})();


