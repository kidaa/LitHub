myApp.controller('UsersController', function ($scope, UserFactory, $location) {
	
	UserFactory.checkSession(function (sessionID) {
		$scope.sessionID = sessionStorage.getItem('sessionID');
		$scope.sessionName = sessionStorage.getItem('sessionName')
	});

	$scope.loginUser = function(user) {
		UserFactory.loginUser(user, function(userFound) {
			$scope.sessionID = userFound[0].id;
			$scope.sessionName = userFound[0].first_name;
		});
	}

	$scope.logout = function() {
		UserFactory.logout(function() {
			$scope.sessionID = null;
		});
	}

	$scope.addUser = function(newUser) {
		UserFactory.addUser(newUser, function (userInfo) {
			$location.path('/');
		});	
	}
});