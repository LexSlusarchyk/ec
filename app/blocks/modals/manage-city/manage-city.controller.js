(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('ManageCityModalController', ManageCityModalController);


    ManageCityModalController.$inject = ['capitalsService', '$uibModalStack'];

    function ManageCityModalController(capitalsService, $uibModalStack) {
        var vm = this;

        vm.submit = submit;
        vm.city = {
            status: {
                neutral: true,
                visited: false,
                going_to_visit: false
            }
        };

        activate();

        function activate() {

        }

        function submit() {
            capitalsService.add(vm.city);
            $uibModalStack.dismissAll();
        }
    }

})();