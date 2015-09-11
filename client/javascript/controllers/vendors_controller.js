myApp.controller('VendorsController', function ($scope, VendorFactory, $location, $routeParams) {

	VendorFactory.getMenu($routeParams.id, function (menu) {
		$scope.indicas = [];
		$scope.sativas = [];
		$scope.hybrids = [];
		$scope.name = menu[0].name;
		for (var i = 0; i < menu.length; i++) {
			if (menu[i].category == "Indica") {
				$scope.indicas.push(menu[i]);
			}
			if (menu[i].category == "Sativa") {
				$scope.sativas.push(menu[i]);
			}
			if (menu[i].category == "Hybrid") {
				$scope.hybrids.push(menu[i]);
			}
		}
	});
});