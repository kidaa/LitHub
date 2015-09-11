var mysql = require('mysql');
var connection = mysql.createConnection({
  	host : 'localhost',
  	user : 'root',
  	password : 'root',
  	database : 'greencommerce'
});

connection.connect();

module.exports = (function() {
	return {

		retrieve: function(req, res) {
			connection.query("SELECT users.first_name, users.last_name, vendors.name as vendor, vendors_has_strains.price_gram, reservations.quantity_gram, reservations.quantity_eigth, reservations.quantity_quarter, reservations.quantity_half, reservations.quantity_oz, strains.name, strains.category, reservations.status, reservations.id, reservations.strain_id FROM reservations JOIN users ON users.id = reservations.user_id JOIN vendors ON vendors.id = reservations.vendor_id JOIN vendors_has_strains ON vendors_has_strains.strain_id = reservations.strain_id JOIN strains ON strains.id = vendors_has_strains.strain_id WHERE reservations.user_id = " + "'" + req.body.id + "'" + " GROUP BY reservations.id;",
			function(error, reservations, fields) {
				if (error) {
					console.log(error);
				} else {
					res.json(reservations);
				}
			});
		},

		cancel: function(req, res) {
			connection.query("DELETE FROM reservations WHERE reservations.id = " + "'" + req.body.id + "'",
			function(error, reservations, fields) {
				if (error) {
					console.log(error);
				} else {
					res.json({});
				}
			});
		},

		add: function(req, res) {
			var post = {user_id: req.body.user_id, vendor_id: req.body.vendor_id, quantity_gram: req.body.quantity_gram, quantity_eigth: req.body.quantity_eigth, quantity_quarter: req.body.quantity_quarter, quantity_half: req.body.quantity_half, quantity_oz: req.body.quantity_oz, created_at: req.body.created_at, updated_at: req.body.created_at, status: 0, strain_id: req.body.strain_id};
			connection.query("INSERT INTO reservations SET ?", post, function(error, reservations, fields) {
				if (error) {
					console.log(error);
				} else {
					res.json({});
				}
			});
		},

		getAll: function(req, res) {
			connection.query("SELECT users.first_name, users.last_name, vendors.name as vendor, vendors_has_strains.price_gram, reservations.quantity_gram, reservations.quantity_eigth, reservations.quantity_quarter, reservations.quantity_half, reservations.quantity_oz, strains.name, strains.category, reservations.status, reservations.id, reservations.strain_id FROM reservations JOIN users ON users.id = reservations.user_id JOIN vendors ON vendors.id = reservations.vendor_id JOIN vendors_has_strains ON vendors_has_strains.strain_id = reservations.strain_id JOIN strains ON strains.id = vendors_has_strains.strain_id;", function(error, reservations, fields) {
				if (error) {
					console.log(error);
				} else {
					res.json(reservations);
				}
			});
		},

		getItem: function(req, res) {
			connection.query("SELECT vendors.id as vendor_id, vendors.name as vendor_name, vendors.address, vendors.latitude, vendors.longitude, vendors.phone, vendors.email, vendors.online_reservation, vendors.phone_reservation, vendors.created_at, vendors.updated_at, strains.id as strain_id, vendors_has_strains.price_gram, vendors_has_strains.price_eigth, vendors_has_strains.price_quarter, vendors_has_strains.price_half, vendors_has_strains.price_oz, strains.leafly_id, strains.name as strain_name, strains.slug, strains.category, strains.symbol, strains.description, strains.star_image, strains.thumb_img1, strains.thumb_img2, strains.thumb_img3, strains.thumb_img4, strains.fullsize_img1, strains.fullsize_img2, strains.fullsize_img3, strains.fullsize_img4, strains.test_graph, strains.effects1, strains.effects2, strains.effects3, strains.effects4, strains.effects5, strains.medical1, strains.medical2, strains.medical3, strains.medical4, strains.medical5, strains.negatives1, strains.negatives2, strains.negatives3, strains.negatives4, strains.negatives5, strains.grow_difficulty FROM vendors JOIN vendors_has_strains ON vendors.id = vendors_has_strains.vendor_id JOIN strains ON strains.id = vendors_has_strains.strain_id WHERE  vendors.id = " + req.params.vendorID + " AND strains.id = " + req.params.strainID, function (error, item, fields) {
				if (error) {
					console.log(error);
				} else {
					console.log(item);
					res.json(item);
				}
			});
		},

	//write next method here

		available: function(req, res) {
			connection.query("UPDATE reservations SET status = 1 WHERE id = " + "'" + req.body.id + "'",
			function(error, reservations, fields) {
				if (error) {
					console.log(error);
				} else {
					res.json({});
				}
			});
		},

		unavailable: function(req, res) {
			connection.query("UPDATE reservations SET status = 0 WHERE id = " + "'" + req.body.id + "'",
			function(error, reservations, fields) {
				if (error) {
					console.log(error);
				} else {
					res.json({});
				}
			});
		}
	}
})();