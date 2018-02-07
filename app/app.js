'use strict';

// Declare app level module which depends on views, and components
angular
    .module('myApp', [
      'ui.router',
      'ui.router.state.events',
      'myApp.version',
      'ngStorage'
])
    .config(['$urlRouterProvider', '$locationProvider',
        function($urlRouterProvider, $locationProvider) {
            $locationProvider.hashPrefix('!');

 // $routeProvider.otherwise({redirectTo: '/view1'});
}]);
