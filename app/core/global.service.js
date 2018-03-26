(function() {
    'use strict';

    angular
        .module('app')
        .factory('global', global);

    global.$inject = [];

    function global() {
    	var service = {
            apiUrl: 'http://127.0.0.1:8000/app_dev.php'
    	};

        function initStates() {

        }

    	return service;
    }

})();
