(function() {
    'use strict';

    angular
        .module('app')
        .directive('ecoHeader', ecoHeader);

    ecoHeader.$inject = [];
    /* @ngInject */
    function ecoHeader() {
        var directive = {
            bindToController: true,
            controller: EcoHeaderController,
            controllerAs: 'vm',
            restrict: 'A',
            templateUrl: 'layout/eco-header/eco-header.view.html'
        };

        return directive;
    }

    EcoHeaderController.$inject = ['$element', '$rootScope', '$scope', '$state'];
    /* @ngInject */
    function EcoHeaderController($element, $rootScope, $scope, $state) {
        var vm = this;
 /*       vm.states = [];

        vm.getStateHref = getStateHref;

        activate();

        function activate() {
            updateStates();
        }

        function getStateHref(state) {
            return $state.href(state.name, state.params);
        }

        function updateStates() {
            var statesList = [
                {
                    ukName: 'Головна',
                    name: 'home'
                },
                {
                    ukName: 'Про проект',
                    name: 'about'
                }
            ];

            vm.states.length = 0;

            _.each(statesList, function(elem) {
                vm.states.push(elem);
            })
        }
        console.log(vm.states);*/

    }
})();