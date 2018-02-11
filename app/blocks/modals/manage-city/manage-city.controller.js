(function () {
    'use strict';

    angular
        .module('myApp')
        .controller('ManageCityModalController', ManageCityModalController);


    ManageCityModalController.$inject = ['$uibModalStack', 'capitalsService'];

    function ManageCityModalController($uibModalStack, capitalsService) {
        var vm = this;

        vm.submit = submit;
        vm.city = {
            status: {
                neutral: true,
                visited: false,
                going_to_visit: false
            },
            weather: null
        };


        function submit() {
            capitalsService.data.add(vm.city);
            $uibModalStack.dismissAll();
        }
    }

})();