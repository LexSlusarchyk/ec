'use strict';

// Declare app level module which depends on views, and components
angular
    .module('myApp', [
      'ngRoute',
      'ui.router',
      'ui.router.state.events',
      'myApp.view1',
      'myApp.view2',
      'myApp.version'
])
    .config(['$urlRouterProvider', '$locationProvider', '$routeProvider',
        function($urlRouterProvider, $locationProvider, $routeProvider) {
            $locationProvider.hashPrefix('!');

 // $routeProvider.otherwise({redirectTo: '/view1'});
}]);
