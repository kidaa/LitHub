myApp.factory('VendorFactory', function ($http) {
	var factory = {};
	
	factory.getMenu = function(vendorID, callback) {
		$http.get('/getMenu/' + vendorID).success(function (menu) {
			callback(menu);
		});
	}
	return factory;

	
});