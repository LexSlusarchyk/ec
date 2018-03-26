'use strict';

// Declare app level module which depends on views, and components
angular
    .module('app', [
      'ui.router',
      'ui.router.state.events',
      'ui.bootstrap',
      'ngStorage'
])
    .config(['$urlRouterProvider', '$locationProvider', '$sceDelegateProvider', '$compileProvider',
        function($urlRouterProvider, $locationProvider, $sceDelegateProvider, $compileProvider) {
            $locationProvider.html5Mode(true);
            $urlRouterProvider.otherwise("login");
            $compileProvider.preAssignBindingsEnabled(true);

            $sceDelegateProvider.resourceUrlWhitelist([   //White list for wether api
                // Allow same origin resource loads.
                'self',
                // Allow loading from our assets domain.  Notice the difference between * and **.
                'http://api.openweathermap.org/**']);


 // $routeProvider.otherwise({redirectTo: '/view1'});
    }]);
