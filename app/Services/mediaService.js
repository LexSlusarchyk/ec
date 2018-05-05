(function() {
	'use strict';

	angular
		.module('app')
		.factory('mediaService', mediaService);

	mediaService.$inject = ['$q', '$http'];

	function mediaService($q, $http) {

		var service = {
			uploadBase64Image: uploadBase64Image
		}

		return service;

		function uploadBase64Image(base64Image) {
			var defered = $q.defer();
			var reqBody = {
				imageString: base64Image
			}

			$http.post('api/saveImage.php', reqBody).then(function(data){
				defered.resolve(data)
			})

			return defered.promise
		}
	}


})()
