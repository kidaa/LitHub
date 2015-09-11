myApp.controller('MapsController', function ($scope, MapFactory, $location, $routeParams) {
	$scope.map = { 
		center: { latitude: 47.605628, longitude: -122.253799 }, 
		zoom: 12 
	};
	
	$scope.markers = [
	   	{ 
	   		id: 1, 
			coords: {latitude: 47.609811, longitude: -122.198494 }, 
			icon: './../assets/icons/marker.png',
			click: function(marker) {
				var vendorID = marker.$$childHead.models[0].id;
				$scope.$apply(function() {
					$location.path('/vendor/' + vendorID);
				});	
			}
		},

		{ 
	   		id: 3, 
			coords: {latitude: 47.6131, longitude: -122.302 }, 
			icon: './../assets/icons/marker.png',
			click: function(marker) {
				var vendorID = marker.$$childHead.models[1].id;
				console.log(marker);
				console.log(vendorID);
				$scope.$apply(function() {
					$location.path('/vendor/' + vendorID);
				});	
			}
		}

	];

	// $scope.windows = [
	// 	{
	// 		id: 1, 
	// 		coords: {latitude: 47.619921, longitude: -122.198494 }, 
	// 		show: 'TRUE',
	// 		templateUrl: './../partials/window.html',
	// 		templateParameter: {},
	// 		isIconVisibleOnClick: 'TRUE',
	// 		closeClick: function() {
	// 			alert('close click');
	// 		}
	// 	}
	// ];
});