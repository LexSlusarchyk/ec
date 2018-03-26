(function () {
    'use strict';
    angular
        .module('myApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$rootScope', 'modalService', 'users'];

    function HomeController($rootScope, modalService, users) {
        var vm = this;



        activate();

        function activate() {

        }


        users.getAll().then(function (data) {
            vm.users = data.data;
            console.log(vm.users);
        })

        users.get(1).then(function (data) {
            vm.user = data.data;
            console.log(vm.user);
        })

    }
})();


