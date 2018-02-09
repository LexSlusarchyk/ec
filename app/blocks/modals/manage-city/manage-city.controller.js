(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('ManageCityModalController', ManageCityModalController);


    ManageCityModalController.$inject = ['capitalsService', '$uibModalStack'];

    function ManageCityModalController(capitalsService, $uibModalStack) {
        var vm = this;

        vm.submit = submit;
        vm.city = {};

        activate();

        function activate() {

        }

        function submit() {
            capitalsService.add(vm.city);
            $uibModalStack.dismissAll();
        }
    }

})();