(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['capitalsService'];

    function HomeController(capitalsService) {
        var vm = this;

        getCapitals();

        function getCapitals() {
            capitalsService.getAll().then(function(response) {
                console.log(response);

                vm.capitals = [];


                        for (var i =0; i < response.capitals.length; i++) {

                            vm.capitals.push(response.capitals[i]);

                        }


                console.log(vm.capitals);

            });
        }



    }
})();


