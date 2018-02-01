(function(){
    'use strict';

    angular
        .module('myApp')
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('about', {
                    url:'/about',
                    templateUrl: 'about-state/about.view.html',
                    controller: 'AboutController',
                    controllerAs: 'vm'
                })
        }])
})();