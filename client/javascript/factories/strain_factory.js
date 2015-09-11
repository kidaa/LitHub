myApp.factory('StrainFactory', function ($http) {
	var factory = {};
	var strains = [];

	factory.getStrains = function(callback) {
		$http.get('/getStrains').success(function (strains) {
			console.log('strains that were sent back to the factory: ', strains);
			callback(strains);
		});
	}

	return factory;
});