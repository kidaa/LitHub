myApp.factory('MapFactory', function ($http) {
	var factory = {};

	factory.showVendor = function() {
		console.log('here');
	},
	factory.getCoords = function(callback) {
		$http.get('/dispensaries').then(function (dispensaries) {
			callback(dispensaries);
		})
	}
	return factory;
});