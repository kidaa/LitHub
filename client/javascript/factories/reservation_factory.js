myApp.factory('ReservationFactory', function($http) {
	var factory = {};
	var factoryItem;

	factory.getItem = function(vendorID, strainID, callback) {
		$http.get('/getItem/' + vendorID + "/" + strainID).success(function (item) {
			factoryItem = item;
			callback(factoryItem);
		});
	}

	factory.getReservations = function(userID, callback) {
		$http.post('/getReservations', {id: userID}).success(function (reservations) {
			callback(reservations);
		});
	  }

	factory.cancelOrder = function(reservationID, callback) {
		$http.post('/cancelOrder', {id: reservationID}).success(function () {
			callback();
		});
	}

	factory.getAllReservations = function(callback) {
		$http.get('/getAllReservations').success(function (allReservations) {
			callback(allReservations);
		});
	  }

	factory.available = function(reservationID, callback) {
		console.log(reservationID);
		$http.post('/available', {id: reservationID}).success(function () {
			callback();
		});
	}

	factory.addOrder = function(newOrder, userID, vendorID, strainID, callback) {
		var newOrderAdd = {};
		newOrderAdd.user_id = userID;
		newOrderAdd.vendor_id = vendorID;

		if (newOrder.unit == "grams") {
			newOrderAdd.quantity_gram = newOrder.amount;
			newOrderAdd.quantity_eigth = 0;
			newOrderAdd.quantity_quarter = 0;
			newOrderAdd.quantity_half = 0;
			newOrderAdd.quantity_eigth = 0;
			newOrderAdd.quantity_oz = 0;
			newOrderAdd.created_at = Date.now();
			newOrderAdd.updated_at = Date.now();
			newOrderAdd.status = 0;
			newOrderAdd.strain_id = strainID;
		}
		
		$http.post('/addOrder', newOrderAdd).success(function() {
			callback();
		});
	}

	factory.unavailable = function(reservationID, callback) {
		console.log(reservationID);
		$http.post('/unavailable', {id: reservationID}).success(function () {
			callback();
		});
	}

	return factory;
});