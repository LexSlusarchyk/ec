'use strict';

// Declare app level module which depends on views, and components
angular
    .module('app', [
      'ui.router',
      'ui.router.state.events',
      'ui.bootstrap',
        'ngCropper',
        'summernote',
      'ngStorage'
    ])

    .config(['$urlRouterProvider', '$locationProvider',
        function($urlRouterProvider, $locationProvider) {
 //           $locationProvider.html5Mode(true);
           $urlRouterProvider.otherwise("home");

        }]);
