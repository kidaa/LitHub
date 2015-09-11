myApp.factory('UserFactory', function ($http) {
	var factory = {};
	var userid;
	if (sessionStorage.getItem('sessionID') != undefined) {
		userid = sessionStorage.getItem('sessionID');
	}
	
	factory.checkSession = function(callback) {
		factory.sessionID = sessionStorage.getItem('sessionID');
		// console.log(factory.sessionID);
		callback(factory.sessionID);
	}

	factory.loginUser = function(user, callback) {
		// console.log('at factory, user: ', user);
		$http.post('/loginUser', user).success(function (userFound) {
			userid = userFound[0].id;
			// console.log(userFound[0].id);
			// console.log('made it back from database, userid: ', userFound[0].id);
			sessionStorage.setItem('sessionID', userFound[0].id);
			sessionStorage.setItem('sessionName', userFound[0].first_name);
			callback(userFound);
		});
	}
	
	factory.logout = function(callback) {
		sessionStorage.clear();
		callback();
	}

	factory.returnUser = function(callback) {
		callback(userid);
	}

	factory.addUser = function(newUser, callback) {
		$http.post('/addUser', {first_name: newUser.first_name, last_name: newUser.last_name, email: newUser.email, password: newUser.password, created_at: Date.now()})
		.success(function (userInfo) {
			// console.log(userInfo);
			callback(userInfo);
		});
	}
	
	return factory;
});