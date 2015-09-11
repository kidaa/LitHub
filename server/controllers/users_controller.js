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
		find: function(req, res) {
			connection.query("SELECT * FROM users WHERE users.email = " + "'" + req.body.email + "'" + " AND users.password = " + "'" + req.body.password + "'", function(error, user, fields) {
				if (error) {
					console.log(error);
				} else {
					console.log(user);
					res.json(user);
				}
			});
		},	

// INSERT INTO users (first_name, last_name, email, password, created_at, updated_at)
// VALUES ('Kris', 'Ekenes', 'kris@ekenes', 'password', '2008-11-11 13:23:44', '2008-11-11 13:23:44'); 

		add: function(req, res) { 
			// console.log(req.body.created_at);
			var post = {first_name: req.body.first_name, last_name: req.body.last_name, email: req.body.email, password: req.body.password, created_at: req.body.created_at, updated_at: req.body.created_at};
			connection.query("INSERT INTO users SET ?", post, function(error, user, fields) {
				if (error) {
					console.log(error);
				} else {
					res.json(user);
				}
			});
		}	
	}
})();