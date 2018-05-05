(function(){
    'use strict';

    angular
        .module('app')
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('dashboard', {
                    url:'/dashboard',
                    templateUrl: 'dashboard/dashboard.html',
                    controller: 'DashboardController',
                    controllerAs: 'vm'
                })
        }])
})();

